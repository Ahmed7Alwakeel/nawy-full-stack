// export const API_URL = "http://localhost:4000/api/v1"
export const API_URL = "http://backend:4000/api/v1"
export const generalGet = async (route: string): Promise<any> => {
	const res = await fetch(`${API_URL}/${route}`, {
		method: "GET",
		headers: {
			Accept: "application/json",
		},
		cache: "no-store",
	})
	return res.json()
}
