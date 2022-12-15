import '../../index.css';
import React from 'react';


export const Input = ({onChange}) => { 
    
    const handleValueChange = (event) => {
       onChange(event.target.value)
   }

   

    return (
        <input className='input' type="text" placeholder="Title..." onChange={handleValueChange}/>
    )
}