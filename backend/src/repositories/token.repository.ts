import TokenModel from "../models/token.model"

class TokenRepo {
	async create(token: string, id: string) {
		return await TokenModel.create({ token, user: id })
	}

	async findOne(id: string) {
		return await TokenModel.findOne({ user: id })
	}

	async deleteOne(id: string) {
		return await TokenModel.deleteOne({ user: id })
	}
}

export default new TokenRepo()
