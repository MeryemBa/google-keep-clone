import React, { createContext } from "react";
import useToggle from "../hookes/useToggle";

export const DisplayContext = createContext();
export function DisplayProvider(props) {
  const [isList, changeDisplay] = useToggle("display", true);

  return (
    <DisplayContext.Provider value={{ isList, changeDisplay }}>
      {props.children}
    </DisplayContext.Provider>
  );
}
