import React, { useState, useEffect } from "react";
import "./App.css";

//  componet imports

import Form from "./componets/Form";
import TodoList from "./componets/TodoList";

function App() {
  // States

  // Use Effect

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState(["all"]);
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "incomplete":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  return (
    <div className="App">
      <header>
        <h1>My Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
