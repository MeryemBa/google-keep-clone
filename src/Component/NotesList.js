import React, { useContext,useEffect } from "react";
import Note from "./Note";
import "../styles/Container.css";
import { DisplayContext } from "../context/Display-context";
export default function NotesList({ notes, message }) {
  const { isList } = useContext(DisplayContext);
  const displayMode = !isList ? "output-list" : "output-grid";


  useEffect(() => {
    // this function is just to force the rerender process so that dens proprety could reorganise the notes
    console.log()
   
    }, [notes])

  return(
    notes.length !== 0 ? (
      <div className={`output ${displayMode}`}>
        {notes.map((noteItem, index) => {
          return <Note key={index} note={noteItem} />;
        })}
      </div>
    ) : (
      <div className={`output output-list`}>
        <h2>{message}</h2>
      </div>
    )
  )
}
