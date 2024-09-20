import { Router } from "express"
import apartmentController from "../controllers/apartment.controller"
import authController from "../controllers/auth.controller"

export const apartmentRoute = Router()

apartmentRoute
	.route("/")
	.get(apartmentController.getAll)
	.post(
		authController.protect,
		authController.permittedTo("admin"),
		apartmentController.createOne
	)

apartmentRoute
	.route("/:id")
	.get(apartmentController.getOne)
	.patch(
		authController.protect,
		authController.permittedTo("admin"),
		apartmentController.updateOne
	)
	.delete(
		authController.protect,
		authController.permittedTo("admin"),
		apartmentController.deleteOne
	)
