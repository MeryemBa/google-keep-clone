import React, { createContext } from "react";
import noteReducer from "../Reducer/Note-reducer";
import { useLocalStoregeWReducer } from "../hookes/useLocalStoregeWReducer";

export const NotesContext = createContext();
export const DispatchContext = createContext();
export function NotesProvider(props) {
  const [notes, dispatch] = useLocalStoregeWReducer("notes", [], noteReducer);
  return (
    <NotesContext.Provider value={notes}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </NotesContext.Provider>
  );
}
