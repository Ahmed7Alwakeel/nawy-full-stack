import mongoose from "mongoose"
import { IApartment } from "../interfaces/apartment.interface"

const apartmentSchema = new mongoose.Schema<IApartment>({
	area: {
		type: String,
		required: true,
		enum: ["Zed", "Silversands", "June"],
		message: "Area doesn't exists",
	},
	description: {
		type: String,
		required: true,
	},
	size: {
		type: Number,
		required: true,
	},
	noOfBathrooms: {
		type: Number,
		required: true,
	},
	noOfBedrooms: {
		type: Number,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	unitName: {
		type: String,
		required: true,
		enum: ["Sunset", "Skyline", "Heights"],
		message: "Area doesn't exists",
	},
	unitNumber: {
		type: String,
		required: true,
		enum: ["U1", "U2", "U3"],
		message: "Area doesn't exists",
	},
})

const ApartmentModel = mongoose.model("Apartment", apartmentSchema)
export default ApartmentModel
