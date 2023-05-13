import React, { useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
      props.onSubmit({
        id:Math.floor(Math.random() * 1000),
        text:input
      });
    setInput("");
  };



  const handleChange = (e) => {
    setInput(e.target.value);
  };





  return (
    <>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          value={input}
          className="todo-input"
          placeholder="Add to the Todo"
          onChange={handleChange}
        />
        <button className="todo-button"> Add Task</button>
      </form>
    </>
  );
};

export default TodoForm;
