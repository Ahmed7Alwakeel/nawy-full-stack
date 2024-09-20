import { Request } from "express"
import { IApartment } from "../interfaces/apartment.interface"
import apartmentRepository from "../repositories/apartment.repository"

class ApartmentService {
	async createApartment(body: IApartment) {
		return await apartmentRepository.create(body)
	}

	async getAllApartments(req: Request) {
		return await apartmentRepository.findAll(req)
	}

	async getApartmentById(id: string) {
		return await apartmentRepository.findById(id)
	}

	async updateApartment(id: string, body: IApartment) {
		return await apartmentRepository.updateById(id, body)
	}

	async deleteApartment(id: string) {
		return await apartmentRepository.deleteById(id)
	}
}

export default new ApartmentService()
