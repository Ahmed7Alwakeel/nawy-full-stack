import jwt, { JwtPayload } from "jsonwebtoken"
import * as bcrypt from 'bcryptjs';
import AppError from "../utils/appError"
import tokenRepository from "../repositories/token.repository"
import userRepository from "../repositories/user.repository"

class AuthService {
	createToken = async (id: string) => {
		const token = jwt.sign({ id }, process.env.JWT_SECRET as string)
		await tokenRepository.deleteOne(id)
		await tokenRepository.create(token, id)
		return token
	}

	login = async (email: string, password: string) => {
		let user = await userRepository.findOne(email)
		if (!user || !(await user.comparePassword(password, user.password))) {
			throw new AppError("Invalid credentials", "FAIL", 401)
		}

		const token = await this.createToken(user.id)
		user = await userRepository.findBy(user.id)
		return { user, token }
	}

	logout = async (userId: string) => {
		await tokenRepository.deleteOne(userId)
	}

	verifyToken = async (token: string) => {
		const decoded: JwtPayload | null = jwt.decode(token, { json: true })
		if (!decoded) {
			throw new AppError("Unauthenticated", "Fail", 401)
		}

		const userId = (decoded as { id: string }).id
		const gettingToken = await tokenRepository.findOne(userId)

		if (!gettingToken || !(await bcrypt.compare(token, gettingToken.token))) {
			throw new AppError("Unauthenticated", "Fail", 401)
		}

		if (gettingToken.tokenExpires < new Date()) {
			await tokenRepository.deleteOne(userId)
			throw new AppError("Token expired", "Fail", 401)
		}

		const user = await userRepository.findBy(userId)
		if (!user) {
			throw new AppError("Unauthenticated", "Fail", 401)
		}

		return user
	}
}

export default new AuthService()
