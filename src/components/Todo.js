import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const Todo = ({task,toggleComplete,deleteTodo,editTodo}) => {
  return (
    <div className="Todo">
      <p 
      className={`${task.completed ? 'completed' : ""}`}
      onClick={() => toggleComplete(task.id)}>{task.task}
      </p>



      <div className="icons">
        <RiCloseCircleLine
        className="delete-icon" 
        onClick={() => deleteTodo(task.id)}/>

        <TiEdit 
        className="edit-icon"
        onClick={() => editTodo(task.id)} 
        />
      </div>


    </div>
  );
};

export default Todo;
