import React, { useState, useEffect, useContext, memo } from "react";
import { DispatchContext } from "../context/Notes-context";
import DeleteIcon from "@material-ui/icons/Delete";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import RestoreFromTrashIcon from "@material-ui/icons/RestoreFromTrash";
import { withStyles } from "@material-ui/core/styles";
import { Checkbox } from "@material-ui/core";
import { useRef } from "react";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import UnarchiveOutlinedIcon from "@material-ui/icons/UnarchiveOutlined";
import "../styles/Note.css";
import ColorP from "./ColorP";
import colors from "../data/Colors";
import { ThemeContext } from "../context/Theme-context";
const NoteCheckbox = withStyles({
  root: {
    color: "inherit",
    width: "25px",
    height: "25px",

    margin: 0,
    padding: 0,
    "&$checked": {
      color: "inherit",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

function Note({note}) {
  const { title, content, id, completed, archive, delet, color } = note;
  const elHeight = useRef(null);
  const [spanNumber, setnumber] = useState();
  const dispatch = useContext(DispatchContext);
  const { isDarkMode } = useContext(ThemeContext);
  //Select the theme value to map the specific theme colors for the notes background into the color pallet.
  // Colors are stored in a map object.
  const mode = isDarkMode ? 0 : 1;
  //select the note color that corresponds to the theme selected by the user
  const noteColor = colors.get(color)[mode];
//   Give the border the same color as the background note if the user did change it. 
// Otherwise, stick to the defaults
  const borderColor = color !== "Default" && noteColor;
 
  const buttonClass = ` element icon ${
    color !== "Default" && "backGroundColored-icon"
  }`;


  useEffect(() => {
    //offsetHeight to get note height  including padding, border and scrollbar.
    // we should add the margine bottom and top + 10px for the grid gap to the element height.
    const height = elHeight.current.offsetHeight+42;
 
   // caluclate the span value for the grid-row css property
    const spanvalue = Math.trunc(height / 50);
   
    setnumber(spanvalue);
  }, [note]);

  return (
    <div
      className="note"
      style={{
        gridRow: `span ${spanNumber}`,
        backgroundColor: noteColor,
        borderColor: borderColor,
        opacity:completed ? "0.5" : "1",
      }}
      ref={elHeight}
    >
      <h1>{title}</h1>
      <p>{content}</p>

      {!delet ? (
        <>
          <button
            className={buttonClass}
            onClick={() => dispatch({ type: "remove", id: id })}
            aria-label="Delete Note"
          >
            <DeleteIcon />
          </button>
          <button className={buttonClass} aria-label="complete Ckeckbox">
            <NoteCheckbox
              checked={completed}
              onChange={() => dispatch({ type: "toggle", id: id })}
              name="checkedG"
              aria-label="completed note"
              aria-checked={completed}

            />
          </button>
          <button className={buttonClass} aria-label="Archive">
            <NoteCheckbox
              icon={<ArchiveOutlinedIcon />}
              checkedIcon={<UnarchiveOutlinedIcon />}
              checked={archive}
              onChange={() => dispatch({ type: "archive", id: id })}
              name="checkedH"
              aria-label="archive note"
              aria-checked={archive}
            />
          </button>
          <ColorP id={id} className={buttonClass} selectedcolor={color} />
        </>
      ) : (
        <>
          <button
            className={buttonClass}
            onClick={() => dispatch({ type: "delet", id: id })}
            aria-label="Delete Note forever"
          >
            <DeleteForeverIcon />
          </button>
          <button
            className={buttonClass}
            onClick={() => dispatch({ type: "remove", id: id })}
            aria-label="Restor Note"
          >
            <RestoreFromTrashIcon />
          </button>
        </>
      )}
    </div>
  );
}

export default memo(Note);
