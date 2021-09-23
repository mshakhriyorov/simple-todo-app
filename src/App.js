/* eslint-disable */
import "./styles.css";
import { useState } from "react";


/**
 * This is a todo app with multiple bugs and badly written lines.
 * Can you fix these bugs and make code follow good practices?
 * В этом коде есть несколько багов и гавнокода, ты можешь это исправить?
 * Можно воспользоватся кодсандбоксом для исправления кода: https://codesandbox.io/s/new?file=/src/App.js:0-1806
 */

 function App() {
   const [value, setValue] = useState("");
   const [todos, setTodos] = useState([]);

  function handleChange(e) {
    setValue(e.target.value)
  }

  const addTodo = () => {
    if (value !== "") {
      const taskDetails = {
        id: Math.floor(Math.random() * 1000),
        value: value,
        isCompleted: false,
      };

      setTodos([...todos, taskDetails]);
    }
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    setTodos(todos.filter((t) => t.id !== id))
  };

  const handleComplete = (e, id) => {
    e.preventDefault();
    const element = todos.findIndex((elem) => elem.id === id);
    const newToDos = [...todos];
    newToDos[element] = {
      ...newToDos[element], 
      isCompleted: true,
    }

    setTodos(newToDos);
  };



  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input
        type="text"
        name="text"
        id="text"
        onChange={(e) => handleChange(e)}
      />
      <button onClick={addTodo} data-testid="add-todo">Add</button>

      {todos.map((t) => (
        <li key={t.id} className="crossText" >
          {t.value}
          <button onClick={(e) => handleComplete(e, t.id)}>complete</button>
          <button onClick={(e) => handleDelete(e, t.id)}>delete</button>
        </li>
      ))}
    </div>
  );
}


export default App;