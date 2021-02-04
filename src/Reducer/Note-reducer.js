import { uuid } from "uuidv4";
const noteReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [
       
        {
          id: uuid(),
          title: action.title,
          content: action.content,
          completed: false,
          delet: false,
          archive: false,

          color: "Default",
        },
        ...state,
      ];
    case "remove":
      return state.map((note) =>
        note.id === action.id ? { ...note, delet: !note.delet } : note
      );
    case "delet":
      return state.filter((note) => note.id !== action.id);
    case "toggle":
      return state.map((note) =>
        note.id === action.id ? { ...note, completed: !note.completed } : note
      );
    case "edit":
      return state.map((note) =>
        note.id === action.id
          ? { ...note, title: action.Newtitle, content: action.Newcontent }
          : note
      );
    case "archive":
      return state.map((note) =>
        note.id === action.id ? { ...note, archive: !note.archive } : note
      );
    case "addColor":
      return state.map((note) =>
        note.id === action.id ? { ...note, color: action.color } : note
      );
    default:
      return state;
  }
};
export default noteReducer;
