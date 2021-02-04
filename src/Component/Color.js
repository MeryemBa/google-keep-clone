import React from "react";

export default function Color({ colorValue, click, name, selectedColor }) {
  const cssClass =
    name === selectedColor ? "element color activeColor" : " element color";

  return (
    <span
      className={cssClass}
      role="button"
      name={name}
      aria-label={name}
      onClick={() => click(name)}
      style={{ backgroundColor: colorValue }}
    />
  );
}
