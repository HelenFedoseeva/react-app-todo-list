import '../../index.css';
import React from 'react';
import { useState } from 'react';


export const Input = ({ setTodos}) => { 
    const [title, setTitle] = useState('')
    
    const addTodo = (title) => {
        setTodos(prev => [{
            title: title,
            id: Date.now(),
            isCompleted: false,
        },
        ...prev])
         
        setTitle('')
   }

    return (
        <input className='input' type="text" placeholder="Enter your note here..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            onKeyDown={e => e.key === 'Enter' && addTodo(title)}/>
    )
}