import React from "react";
import BooksList from "./components/books-list/books-list";
import { ThemeToggle } from "./components/theme-toggle/theme-toggle";

function App() {
  return (
    <div className="App" style={{ padding: "30px" }}>
      <ThemeToggle />
      <BooksList />
    </div>
  );
}

export default App;
