import React, { useState } from 'react';

const EditTodoForm = ({editTodo,task}) => {
    const [value,setValue]  = useState('');
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        editTodo(value,task.id);
        console.log(value);
        setValue('');
    }

    return (
        <>
            <form className='TodoForm' onSubmit={handleSubmit}>
                 <input 
                 className='todo-input'
                 placeholder='Update the Task'
                 type='text'
                 value={value}
                 onChange={(e)=> setValue(e.target.value)}
                 /> 
                 <button 
                 className='todo-btn'>
                    Updatr Task
                 </button>
            </form>
        </>
    );
}

export default EditTodoForm;
