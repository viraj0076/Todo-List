import { React, useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);



  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    console.log(...todos, todo);
  };


   const removeTodo =(id) =>
   {
       const removeArr = todos.filter((todo) => todo.id !== id);
       setTodos(removeArr);
   }

   const updateTodo = (todoId,newValue) =>
   {
    if (!newValue || /^\s*$/.test(newValue)) {
        return;
      }
     setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
   }



  const completeTodo = (id) => {
    let updateTodos = todos.map((todo) => {
        if(todo.id === id)
        {
            todo.isComplete = !todo.isComplete
        }
        return todo
    });
    setTodos(updateTodos);
  };

  





  return (
    <>
      <div>
        <h1 className="some">What is the plan for Today Viraj ?</h1>
        <TodoForm onSubmit={addTodo} />
        <Todo 
        todos={todos}
        completeTodos={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo} />
      </div>
    </>
  );
};

export default TodoList;
