import { createSlice } from "@reduxjs/toolkit"
import Cookies from "js-cookie"

interface IBreadCrumbs {
	links: {
		label: string
		path: string
	}[]
	page_title: string
	serviceProviderId?: string | null
	distributorId?: string | null
	sellerId?: string | null
}
interface BreadCrumbsState {
	breadCrumbsData: IBreadCrumbs
}
const initialState: BreadCrumbsState = {
	breadCrumbsData: {
		links: [{ label: "dashboard", path: "/" }],
		page_title: "Dashboard",
		serviceProviderId: Cookies.get("service_ID")
			? Cookies.get("service_ID")
			: null,
		distributorId: Cookies.get("distributor_ID")
			? Cookies.get("distributor_ID")
			: null,
		sellerId: Cookies.get("seller_ID") ? Cookies.get("seller_ID") : null,
	},
}

const breadCrumbsSlice = createSlice({
	name: "breadCrumbsData",
	initialState,
	reducers: {
		setBreadCrumbsData: (state, action) => {
			state.breadCrumbsData = action.payload
		},
	},
})

export const setBreadCrumbsData = breadCrumbsSlice.actions.setBreadCrumbsData
export default breadCrumbsSlice.reducer
