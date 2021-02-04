import React, { createContext } from "react";
import useToggle from "../hookes/useToggle";

export const SideBarContext = createContext();
export function SideBarContextProvider(props) {
  const [isHide, toggleBar] = useToggle("sidebar", true);

  return (
    <SideBarContext.Provider value={{ isHide, toggleBar }}>
      {props.children}
    </SideBarContext.Provider>
  );
}
