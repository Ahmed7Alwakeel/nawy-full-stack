import { NextFunction, Request, Response } from "express"
import { catchAsync } from "../utils/catchAsync"
import AppError from "../utils/appError"
import authService from "../services/auth.service"
import IUser from "../interfaces/user.interface"

declare global {
	namespace Express {
		interface Request {
			currentUser: IUser
		}
	}
}

class AuthController {
	login = catchAsync(
		async (req: Request, res: Response, next: NextFunction) => {
			const { email, password } = req.body
			if (!email || !password) {
				return next(new AppError("Invalid credentials", "FAIL", 401))
			}

			const { user, token } = await authService.login(email, password)

			res.status(200).json({
				status: "Success",
				user,
				token,
			})
		}
	)

	logout = catchAsync(
		async (req: Request, res: Response, next: NextFunction) => {
			if (req.currentUser.id) {
				await authService.logout(req.currentUser.id)
			}

			res.status(200).json({
				status: "Success",
			})
		}
	)

	protect = catchAsync(
		async (req: Request, res: Response, next: NextFunction) => {
			const { authorization } = req.headers

			if (!authorization || !authorization.startsWith("Bearer")) {
				return next(new AppError("Unauthenticated", "Fail", 401))
			}

			const token = authorization.split(" ")[1]
			const user = await authService.verifyToken(token)

			req.currentUser = user
			next()
		}
	)

	permittedTo = (...roles: string[]) => {
		return (req: Request, res: Response, next: NextFunction) => {
			if (roles.includes(req.currentUser?.role)) {
				next()
			} else {
				return next(new AppError("Unauthorized", "FAIL", 403))
			}
		}
	}
}

export default new AuthController()
