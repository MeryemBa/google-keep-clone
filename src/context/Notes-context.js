import React, { createContext } from "react";
import noteReducer from "../Reducer/Note-reducer";
import { useLocalStoregeWReducer } from "../hookes/useLocalStoregeWReducer";

export const NotesContext = createContext();
export const DispatchContext = createContext();
export function NotesProvider(props) {
  //context to manage the notes created by the user 
  // this context use useLocalStoregeWReducer to store and handle user actions
  const [notes, dispatch] = useLocalStoregeWReducer("notes", [], noteReducer);
  return (
    <NotesContext.Provider value={notes}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </NotesContext.Provider>
  );
}
