import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IUserData } from "../../types/Interfaces"
import Cookies from "js-cookie"

interface AuthDataState {
	userToken: string | null
	userData: IUserData
}

const cookieData = localStorage.getItem("user_data")
const initialState: AuthDataState = {
	userToken: Cookies.get("token") || null,
	userData: cookieData ? (JSON.parse(cookieData) as IUserData) : {},
}

const authDataSlice = createSlice({
	name: "authData",
	initialState,
	reducers: {
		setUserToken: (state, action: PayloadAction<string | null>) => {
			state.userToken = action.payload
		},
		setUserData: (state, action: PayloadAction<IUserData>) => {
			state.userData = action.payload
		},
		handleUnAuthenticated: (state) => {
			state.userToken = null
			state.userData = {}

			// Remove cookies
			const cookies = Cookies.get()
			for (let cookie in cookies) {
				Cookies.remove(cookie)
			}
		},
	},
})

export const { setUserToken, setUserData, handleUnAuthenticated } =
	authDataSlice.actions
export default authDataSlice.reducer
