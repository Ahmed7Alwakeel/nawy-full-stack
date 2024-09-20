import mongoose from "mongoose"

export default class APIFiltration {
	query: mongoose.Query<Array<IArguments>, IArguments, {}>
	queryString = {}

	constructor(
		query: mongoose.Query<Array<IArguments>, IArguments, {}>,
		queryString: {}
	) {
		this.query = query
		this.queryString = queryString
	}
	filter() {
		const queryParams = { ...this.queryString }
		const excludedFields = ["page", "sort", "limit", "fields"]
		excludedFields.forEach((el) => delete (queryParams as any)[el])
		let queryStr = JSON.stringify(queryParams)
		queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`)
		this.query = this.query.find(JSON.parse(queryStr)) || []
		return this
	}

	//ex: sort=price
	sort() {
		if ((this.queryString as { sort: string }).sort) {
			const sortBy = ((this.queryString as { sort: string }).sort as string)
				.split(",")
				.join(" ")
			this.query = this.query.sort(`${sortBy}`)
		} else {
			this.query = this.query.sort(`-createdAt`)
		}
		return this
	}
}
