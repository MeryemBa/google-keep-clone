import React, { useContext, useRef } from "react";

import CreateArea from "./CreateArea";
import { SideBarContext } from "../context/SideBar-context";

import Routes from "./Routes";
import { useLocation } from "react-router-dom";

import "../styles/Container.css";
import "../styles/ThemeContainer.css";

export default function Container() {
  const { isHide } = useContext(SideBarContext);

  let pathname = useLocation().pathname;
  let containerRef = useRef(0);

  function handelScroll() {
    const header = document.getElementsByTagName("header");

    const scrollY = window.scrollY;
    const currentscrollTop = containerRef.current.scrollTop;
    if (currentscrollTop > scrollY) {
      header[0].style.boxShadow = "0 5px 20px -10px #000";
    } else {
      header[0].style.boxShadow = "none";
    }
  }

  return (
    <div ref={containerRef} onScroll={handelScroll} className="Main-conatiner">
      <div className="line" />
      <div className={`Main ${!isHide && "padding-value"}`}>
        {pathname === "/" && (
          <div>
            <CreateArea />
          </div>
        )}

        <Routes />
      </div>
    </div>
  );
}
