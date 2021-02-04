import { useState, useEffect } from "react";

export default function useToggle(key, initialValue) {
  const [state, setState] = useState(() => {
    let value;
    try {
      value = JSON.parse(
        window.sessionStorage.getItem(key) || Boolean(initialValue)
      );
    } catch (e) {
      value = initialValue;
    }

    return value;
  });

  function ToggleState() {
    setState(!state);
  }
  useEffect(() => {
    window.sessionStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, ToggleState];
}
