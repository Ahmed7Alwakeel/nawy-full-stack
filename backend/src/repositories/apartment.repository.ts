import { IApartment } from "../interfaces/apartment.interface"
import ApartmentModel from "../models/apartment.model"
import APIFiltration from "../utils/apiFiltration"
import { Response, Request, NextFunction } from "express"

class ApartmentRepo {
	async create(body: IApartment) {
		return await ApartmentModel.create({ ...body })
	}

	async findAll(req: Request) {
		const apiFiltration = new APIFiltration(ApartmentModel.find(), req.query)
			.filter()
			.sort()

		return await apiFiltration.query
	}

	async findById(id: string) {
		return await ApartmentModel.findById(id)
	}

	async updateById(id: string, body: IApartment) {
		return await ApartmentModel.findByIdAndUpdate(id, body, {
			new: true,
			projection: "_v",
			runValidators: true,
		})
	}

	async deleteById(id: string) {
		return await ApartmentModel.findByIdAndDelete(id)
	}
}

export default new ApartmentRepo()
