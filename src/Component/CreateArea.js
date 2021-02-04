import React, { useState, useContext } from "react";
import { DispatchContext } from "../context/Notes-context";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import "../styles/CreateArea.css";

function CreateArea(props) {
  const [isClicked, setClick] = useState(false);
  const dispatch = useContext(DispatchContext);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    event.preventDefault();
    if (note.title !== "" || note.content !== "") {
      dispatch({ type: "add", ...note });
    }
    setNote({
      title: "",
      content: ""
    });

   
  }

  return (
    <div>
      <form  onSubmit={submitNote} className="create-note">
      
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder={isClicked ? "Title" : "Take a note..."}
          autoComplete="off"
          onClick={() => {
            setClick(true);
          }}
          aria-label=" note title"
        />

        {isClicked && (
          <textarea
            name="content"
            onChange={handleChange}
            value={note.content}
            placeholder="Take a note..."
            rows="3"
            aria-label="note content"
          />
        )}
        <Zoom in={isClicked}>
          <Fab type="submit" aria-label="add note">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
