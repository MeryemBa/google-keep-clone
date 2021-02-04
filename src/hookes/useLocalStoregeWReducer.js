import { useReducer, useEffect } from "react";

// useLocalStoregeWReducer is a hook in with we use locale storege to stor our data and a reducer to manage our user action 

function useLocalStoregeWReducer(key, defaultValue, reducer) {
  const [state, dispatch] = useReducer(reducer, defaultValue, () => {
    //initial our state with the previous values if they exist if not so we use the defaultValue as an initial state
    let value;
    try {
      value = JSON.parse(
        window.localStorage.getItem(key) || String(defaultValue)
      );
    } catch (e) {
      value = defaultValue;
    }
    return value;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);
  return [state, dispatch];
}
export { useLocalStoregeWReducer };
