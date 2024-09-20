import { ReactNode, useEffect, useState } from "react";
import InitialLoader from "../loaders/InitialLoader";
import AdminPanelHeader from "./AdminPanelHeader";
import SideMenu from "./sideMenu/SideMenu";
import { useLocation } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { setUserData, setUserToken } from "../../modules/auth/store/redux/authData";

const Layout = ({ children }: { children: ReactNode }) => {
    const [openMenu, setOpenMenu] = useState(false)
    let { pathname } = useLocation();
    const dispatch = useDispatch()

    useEffect(() => {
        if (Cookies.get("user_data")) dispatch(setUserData(JSON.parse(Cookies.get("user_data") as string)))
        if (Cookies.get("token")) dispatch(setUserToken(Cookies.get("token") as string))
    }, [])


    useEffect(() => {
        const contentContainer = document.querySelector(".layout_content");
        contentContainer?.scrollTo({ top: 0, behavior: "smooth" });
      }, [pathname]);

    return (
        <main className="layout layout-with-loader">
            <InitialLoader />
            <div className="layout_inner">
                <SideMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
                <ToastContainer
                    autoClose={2000}
                    draggable={false}
                    hideProgressBar={true}
                    position='top-right'
                    transition={Slide}
                />
                <div className={`layout_wrapper`}>
                    <div className={`layout_content ${pathname.includes("/auth/login") ? "login_layout" : ""}`}>
                        {!pathname.includes("/auth/login") && <AdminPanelHeader setOpenMenu={setOpenMenu} />}
                        <div className="content_container">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Layout;