import React, { useState, useContext } from "react";
import PaletteOutlinedIcon from "@material-ui/icons/PaletteOutlined";
import { DispatchContext } from "../context/Notes-context";
import { ThemeContext } from "../context/Theme-context";
import colors from "../data/Colors";
import Color from "./Color";
import "../styles/ColorP.css";
import "../styles/Note.css";
export default function ColorP({ id, className, selectedcolor }) {
  const dispatch = useContext(DispatchContext);
  const { isDarkMode } = useContext(ThemeContext);
  const [iscliked, setClick] = useState(false);
  const mode = isDarkMode ? 0 : 1;

  const handelClick = (name) => {
    dispatch({
      type: "addColor",
      id: id,
      color: name,
    });
    setClick(false);
  };
  let tab = [];
  const colorMapping = () => {
    colors.forEach((value, key) => tab.push({ color: key, code: value }));
  };
  colorMapping();

  return (
    <>
      <button
        className={`element Palette ${className}`}
        onClick={() => setClick(!iscliked)}
        aria-label="Color palette"
      >
        <PaletteOutlinedIcon />
      </button>
      {iscliked && (
        <div
          onPointerLeave={() => setClick(false)}
          className="colorP"
          style={{
            display: !iscliked ? "none" : "inline-flex",
            backgroundColor: colors.get("Default")[mode],
          }}
        >
          {tab.map((item) => (
            <Color
              key={String(item.color)}
              name={String(item.color)}
              click={handelClick}
              selectedColor={selectedcolor}
              colorValue={String(item.code[mode])}
            />
          ))}
        </div>
      )}
    </>
  );
}
