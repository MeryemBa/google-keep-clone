import React, { useContext } from "react";
import { ThemeContext } from "../context/Theme-context";
import { SideBarContext } from "../context/SideBar-context";
import { DisplayContext } from "../context/Display-context";
import NotesIcon from "@material-ui/icons/Notes";
import ViewAgendaOutlinedIcon from "@material-ui/icons/ViewAgendaOutlined";
import BorderAllIcon from "@material-ui/icons/BorderAll";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import logo from "../image/logo.png";
import "../styles/Header.css";
import SideBar from "./SideBar";
import { useLocation } from "react-router-dom";

function Header() {
  const { isDarkMode, changeMode } = useContext(ThemeContext);
  const { toggleBar } = useContext(SideBarContext);
  const { isList, changeDisplay } = useContext(DisplayContext);
  let location = useLocation();
  

  const title = () => {
    switch (location.pathname) {
      case "/trash":
        return <h1>Trash</h1>;
      case "/archive":
        return <h1>Archive</h1>;

      default:
        return (
          <>
            <img src={logo} alt="Logo" className="logo" />
            <h1>Keep</h1>
          </>
        );
    }
  };

  return (
    <header   >
      <SideBar title={title} />
      <div className="Header-info">
        {" "}
        <span
          className="element Header-icon icon"
          aria-label="Toggle Sidebar"
          onClick={toggleBar}
        >
          <NotesIcon />
        </span>
        {/* <img src={logo} alt="Logo" className="logo" />
        <h1>Keep</h1> */}
        {title()}
      </div>

      <div className="Header-info ">
        <div
          className=" element Header-icon icon hide"
          aria-label={isList ? "List View" : "Grid View"}
          onClick={changeDisplay}
        >
          {isList ? <ViewAgendaOutlinedIcon /> : <BorderAllIcon />}
        </div>

        <div
          className="element Header-icon icon"
          aria-label={isDarkMode ? "light Mode" : "Dark Mode"}
          onClick={changeMode}
        >
          {isDarkMode ? <WbSunnyIcon /> : <Brightness3Icon />}
        </div>
      </div>
    </header>
  );
}
export default Header;
