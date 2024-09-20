import { API_URL } from "../../../config/APIs"
import { axiosInstance } from "../../../config/axiosConfig"

export const toggleStatus = async (id:string) => {
	const response = await axiosInstance.patch(
		`${API_URL}/service-providers/${id}/toggle-active`
	)
	return response
}
