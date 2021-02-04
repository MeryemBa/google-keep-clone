import React, { useContext} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { NotesContext } from "../context/Notes-context";
import NoteList from "./NotesList";

export default function Routes() {

  const notes = useContext(NotesContext);

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <NoteList
            notes={notes.filter(
              (item) => item.delet === false && item.archive === false
            )}
            message={"Notes you add appear here"}
          />
        )}
      />
      <Route
        exact
        path="/trash"
        render={() => (
          <NoteList
            notes={notes.filter((item) => item.delet === true)}
            message={"No notes in Trash"}
          />
        )}
      />
      <Route
        exact
        path="/archive"
        render={() => (
          <NoteList
            notes={notes.filter(
              (item) => item.archive === true && item.delet === false
            )}
            message={"Your archived notes appear here"}
          />
        )}
      />
      <Redirect to="/" />
    </Switch>
  );
}
