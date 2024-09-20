import { Response, Request, NextFunction } from "express"
import { catchAsync } from "../utils/catchAsync"
import apartmentService from "../services/apartment.service"
import { checkData } from "../utils/checkData"

class Apartment {
	createOne = catchAsync(async (req: Request, res: Response) => {
		const data = await apartmentService.createApartment(req.body)
		res.status(201).json({
			status: "Success",
			data,
		})
	})

	getAll = catchAsync(async (req: Request, res: Response) => {
		const data = await apartmentService.getAllApartments(req)
		res.status(200).json({
			status: "Success",
			data,
		})
	})

	getOne = catchAsync(
		async (req: Request, res: Response, next: NextFunction) => {
			const data = await apartmentService.getApartmentById(req.params.id)
			checkData(data, next)
			res.status(200).json({
				status: "Success",
				data,
			})
		}
	)

	updateOne = catchAsync(
		async (req: Request, res: Response, next: NextFunction) => {
			const data = await apartmentService.updateApartment(
				req.params.id,
				req.body
			)
			checkData(data, next)
			res.status(201).json({
				status: "Success",
			})
		}
	)

	deleteOne = catchAsync(
		async (req: Request, res: Response, next: NextFunction) => {
			const data = await apartmentService.deleteApartment(req.params.id)
			checkData(data, next)
			res.status(200).json({
				status: "Success",
			})
		}
	)
}

export default new Apartment()
