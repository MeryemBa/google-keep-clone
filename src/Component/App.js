import React from "react";
import Header from "./Header";
import ThemeContainer from "./ThemeContainer";
import Container from "./Container";
import { ThemeProvider } from "../context/Theme-context";
import { SideBarContextProvider } from "../context/SideBar-context";
import { DisplayProvider } from "../context/Display-context";
import { NotesProvider } from "../context/Notes-context";

function App() {
  return (
    <ThemeProvider>
      <SideBarContextProvider>
        <ThemeContainer>
          <DisplayProvider>
            <Header />
            <NotesProvider>
              <Container />
            </NotesProvider>
          </DisplayProvider>
        </ThemeContainer>
      </SideBarContextProvider>
    </ThemeProvider>
  );
}

export default App;
