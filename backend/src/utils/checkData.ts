import { NextFunction } from "express"
import AppError from "./appError"

export const checkData = (data: any, next: NextFunction) => {
	if (!data) {
		return next(new AppError("No data found with that ID", "FAIL", 404))
	}
}
