
import { useLocation } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import AdminDataBtn from "./AdminDataBtn";
import { logo } from "../../config/variables";

const AdminPanelHeader = ({ setOpenMenu }: { setOpenMenu?: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const { pathname } = useLocation();

  return (
    <>
      <div className={`admin_panel_header  ${(pathname == ("/auth/login") || pathname == ("/auth/forgot-password")) ? "login_page_header" : ""}`}>
        {(pathname == ("/auth/login") || pathname == ("/auth/forgot-password")) ?
          <div className="auth_page_header">
            <div className="logo_container">
              {logo}
            </div>
          </div>
          :
          <div className="normal_header">
            <Breadcrumbs />
            <div className="left-side">
              <div className={`burger`} onClick={() => setOpenMenu && setOpenMenu(true)}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <AdminDataBtn />
            </div>
          </div>
        }
      </div>
    </>
  );
}

export default AdminPanelHeader;
