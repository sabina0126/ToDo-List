import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() === "") return;
    setTodos([...todos, { text: inputValue, isCompleted: false }]);
    setInputValue("");
  };  

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
  };

  const toggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="min-h-screen bg-green-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-green-700">
          To-Do List
        </h1>

        <div className="flex mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new task"
            className="flex-grow px-3 py-2 border rounded-l-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            onClick={addTodo}
            className="bg-green-500 text-white px-4 py-2 rounded-r-md hover:bg-green-600 transition-colors"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-green-50 p-2 rounded-md border border-green-200"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={todo.isCompleted}
                  onChange={() => toggleComplete(index)}
                />
                <span className={todo.isCompleted ? "line-through text-gray-500" : ""}>
                  {todo.text}
                </span>
              </div>
              <button
                onClick={() => deleteTodo(index)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
