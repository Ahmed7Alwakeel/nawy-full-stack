export interface IApartment {
	_id: string
	description: string
	size: number
	noOfBathrooms: number
	noOfBedrooms: number
	price: number
	area: string
	unitName: string
	unitNumber: string
}
export interface IHighlight {
	title: string
	value: string | number | undefined
}
