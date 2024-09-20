import { axiosInstance } from "../config/axiosConfig"

interface IPorps {
	route: string
	values: {}
}
export const generalUpdate = async (props: IPorps) => {
	const { route, values } = props
	const response = await axiosInstance.patch(route, values)
	return response
}
export const generalDelete = async (route: string) => {
	const response = await axiosInstance.delete(route)
	return response
}
export const generalPost = async (props: IPorps) => {
	const { route, values } = props

	const response = await axiosInstance.post(route, values)
	return response
}
export const generalGet = async (route: string): Promise<any> => {
	const response = await axiosInstance.get(route)
	return response
}
