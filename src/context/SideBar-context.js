import React, { createContext } from "react";
import useToggle from "../hookes/useToggle";

export const SideBarContext = createContext();
export function SideBarContextProvider(props) {
  //context to manage the sidebar appearance.
  const [isHide, toggleBar] = useToggle("sidebar", true);

  return (
    <SideBarContext.Provider value={{ isHide, toggleBar }}>
      {props.children}
    </SideBarContext.Provider>
  );
}
