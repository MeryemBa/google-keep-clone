import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { SideBarContext } from "../context/SideBar-context";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import "../styles/SideBar.css";

export default function SideBar({ title }) {
  const { isHide, toggleBar } = useContext(SideBarContext);
  const handelToggle = () => {
    if (window.innerWidth <= 500) {
      toggleBar();
    }
  };

  return (
    <div
      style={{ transform: isHide && "translateX(-100%)" }}
      className="SideBar"
    >
      <div>
        <NavLink
          exact
          to="/"
          className="navLink"
          activeClassName="activeNavLink "
          onClick={handelToggle}
        >
          <span>
            {" "}
            <EmojiObjectsOutlinedIcon />
          </span>
          Notes
        </NavLink>

        <div className="line" />
        <NavLink
          exact
          to="/trash"
          className="navLink"
          activeClassName="activeNavLink "
          onClick={handelToggle}
        >
          <span>
            {" "}
            <DeleteOutlineOutlinedIcon />{" "}
          </span>
          Trash
        </NavLink>
        <NavLink
          exact
          to="/archive"
          className="navLink"
          activeClassName="activeNavLink "
          onClick={handelToggle}
        >
          <span>
            {" "}
            <ArchiveOutlinedIcon />{" "}
          </span>
          Archive
        </NavLink>
      </div>
      <div className="SideBar-info">
        Goggle Keep
        <br /> Clone
      </div>
    </div>
  );
}
