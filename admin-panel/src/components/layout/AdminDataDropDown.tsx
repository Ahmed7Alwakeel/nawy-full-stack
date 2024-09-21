

import { useContext } from "react";
import { IAdminDataDropDown } from "../../types/Interfaces";
import { useSelector } from "react-redux";
import { authContext } from "../../store/context/authContext";

const AdminDataDropDown = ({ dropDownToggler }: IAdminDataDropDown) => {
    const { handleLogout } = useContext(authContext)
    const { userData } = useSelector((store: any) => store.authData)
    const logout = () => {
        handleLogout()
    }
    return (
        <div className={`admin_data_drop_down ${dropDownToggler && "show"}`}>
            <div className="drop-header">
                <div className="img-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z" />
                    </svg>
                </div>
                <div className="header">
                    <h6>{userData?.name}</h6>
                </div>
            </div>
            <span className="log-out bold" onClick={() => logout()}>Logout
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h7v2H5v14h7v2H5Zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5l-5 5Z" /></svg>
            </span>
        </div>
    );
}

export default AdminDataDropDown;