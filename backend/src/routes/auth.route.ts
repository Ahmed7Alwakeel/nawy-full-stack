import { Router } from "express"
import authController from "../controllers/auth.controller"

export const authRouter = Router()

authRouter.route("/login").post(authController.login)
authRouter.route("/logout").get(authController.protect, authController.logout)
