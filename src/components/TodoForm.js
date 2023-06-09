import React, { useState } from 'react';

const TodoForm = ({addTodo}) => {
    const [value,setValue]  = useState('');
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        addTodo(value);
        // console.log(value);
        setValue('');
    }

    return (
        <>
            <form className='TodoForm' onSubmit={handleSubmit}>
                 <input 
                 className='todo-input'
                 placeholder='Enter the Task'
                 type='text'
                 value={value}
                 onChange={(e)=> setValue(e.target.value)}
                 /> 
                 <button 
                 className='todo-btn'>
                    Add Task
                 </button>
            </form>
        </>
    );
}

export default TodoForm;
