import React from "react";
import "./App.css";
//  componet imports

import Form from "./componets/Form";
import TodoList from "./componets/TodoList";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
