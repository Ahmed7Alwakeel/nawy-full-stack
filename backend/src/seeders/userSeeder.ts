import mongoose from "mongoose"
import * as bcrypt from 'bcryptjs';
import userModel from "../models/user.model"
import "dotenv/config"

const userData = {
	name: "admin",
	email: "admin@admin.com",
	password: "123",
	role: "admin",
}

;(async function () {
	try {
		await mongoose
			.connect(process.env.MONGO_LOCAL_URL || "")
			.then(() => console.log("RunningDB"))
		userData.password = await bcrypt.hash(userData.password, 8)
		const userToInsert = { ...userData }

		await userModel.deleteOne({ email: userData.email })
		const newUser = new userModel(userToInsert)
		await newUser.save()
		await mongoose.disconnect()
	} catch (error) {
		console.error("Error seeding user:", error)
	}
})()
