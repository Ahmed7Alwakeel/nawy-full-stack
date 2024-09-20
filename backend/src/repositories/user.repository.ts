import userModel from "../models/user.model"

class UserRepo {
	async findOne(email: string) {
		return await userModel.findOne({ email }, { __v: 0 })
	}

	async findBy(id: string) {
		return await userModel.findById(id).select("-password -__v")
	}
}

export default new UserRepo()
