import mongoose, { Query } from "mongoose"
import IUser from "../interfaces/user.interface"
import validator from "validator"
import * as bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema<IUser>({
	name: {
		type: String,
		required: [true, "Name is missing"],
	},

	email: {
		type: String,
		unique: true,
		required: [true, "User email is required"],
		validate: [validator.isEmail, "Please enter valid email"],
		lowercase: true,
	},

	role: {
		type: String,
		enum:["user","admin"],
		default: "user",
	},
	password: {
		type: String,
		required: [true, "Please provide a password"],
		minlength: 3,
	},
})

userSchema.methods.comparePassword = async (
	candidatePassword: string,
	userPassword: string
): Promise<boolean> => {
	return await bcrypt.compare(candidatePassword, userPassword)
}

const userModel = mongoose.model("User", userSchema)

export default userModel
