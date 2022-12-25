import '../../index.css';
import React from 'react';
import { useState } from 'react';


export const Input = ({ addTodo}) => { 
   const [title, setTitle] = useState('')

    return (
        <input className='input' type="text" placeholder="Enter your note here..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            onKeyDown={e => e.key === 'Enter' && addTodo(title)}/>
    )
}