import ActiveSideMenuAccordionContextProvider from "../../../store/context/activeSideMenuAccordionContext";
import TogglerNavLink from "./TogglerNavLink";
import { useLocation, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { sideLogo, sideMenuOpenIcon } from "../../../config/variables";
import { menuLinks } from "../../../config/menuLinks";

const SideMenu = ({ openMenu, setOpenMenu }: { openMenu?: boolean, setOpenMenu?: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    <div className={`sidemenu_wrapper ${isMobile && (openMenu ? "open" : "close")}  ${pathname == "/auth/login" && "hide_sidebar"}`}
    >
      <div className="logo_expand_container">
        <div className="logo_container pointer" onClick={() => navigate("/")}>
          {sideLogo}
        </div>
        {isMobile &&
          <div className={`expand_btn label `}
            onClick={() => {
              setOpenMenu && setOpenMenu(false)
            }}
          >
            {sideMenuOpenIcon}
          </div>
        }
      </div>
      <ul className="nav_links">
        <ActiveSideMenuAccordionContextProvider>
          <TogglerNavLink key={"menuLinks"} keyName="serviceProviderLinks" links={menuLinks} setMenu={setOpenMenu} />
        </ActiveSideMenuAccordionContextProvider>
      </ul>
    </div>
  );

};

export default SideMenu;