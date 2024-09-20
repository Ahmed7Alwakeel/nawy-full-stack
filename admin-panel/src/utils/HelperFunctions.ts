import { toast } from "react-toastify"

export const searchFilterLogic = (props: any) => {
	const { searchInput, listOfData, keys, dropdownValue, dropdownKey } = props
	const regex = /^[a-zA-Z0-9\s.\u0600-\u06FF-]+$/
	if (!regex.test(searchInput)) {
		return []
	}

	return listOfData?.filter((item: any) =>
		keys.some((key: any, index: number) => {
			const nestedKeys = key.split(".") // Split nested key by dot
			let value = item
			for (const nestedKey of nestedKeys) {
				value = value?.[nestedKey]
				if (value === undefined) {
					return false // Stop iteration if nested key not found
				}
			}
			const result =
				value?.toString().toLowerCase().includes(searchInput.toLowerCase()) &&
				(!dropdownValue ||
					item?.[dropdownKey]?.some(
						(category: any) => category?.id == dropdownValue
					))
			return result
		})
	)
}

export const scrollToError = (
	error: boolean,
	ref: React.RefObject<HTMLDivElement>,
	errorMsg?: string
) => {
	if (error) {
		ref?.current?.scrollIntoView({ behavior: "smooth" })
		toast.error(errorMsg || `Please fill all required fields`)
	}
}
