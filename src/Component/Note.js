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
const YellowCheckbox = withStyles({
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

function Note(props) {
  const { title, content, id, completed, archive, delet, color } = props.note;
  const elHeight = useRef(null);
  const [spanNumber, setnumber] = useState();
  const dispatch = useContext(DispatchContext);
  const { isDarkMode } = useContext(ThemeContext);
  const mode = isDarkMode ? 0 : 1;
  const noteColor = colors.get(color)[mode];
  const borderColor = color !== "Default" && noteColor;
  const buttonClass = ` element icon ${
    color !== "Default" && "backGroundColored-icon"
  }`;
  const noteCompleted = completed ? "0.5" : "1";

  useEffect(() => {
    const height = elHeight.current.clientHeight;
    console.log(height);
    const spanvalue = Math.round(height / 50);

    setnumber(spanvalue);
  }, []);

  return (
    <div
      className="note"
      style={{
        gridRow: `span ${spanNumber}`,
        backgroundColor: noteColor,
        borderColor: borderColor,
        opacity: noteCompleted,
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
          <button className={buttonClass} aria-label="Complite Ckeckbox">
            <YellowCheckbox
              checked={completed}
              onChange={() => dispatch({ type: "toggle", id: id })}
              name="checkedG"
              aria-label="completed note"
              aria-checked={completed}

            />
          </button>
          <button className={buttonClass} aria-label="Archive">
            <YellowCheckbox
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
