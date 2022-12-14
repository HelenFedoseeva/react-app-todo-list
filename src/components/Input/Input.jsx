import '../../index.css';
import React from 'react';


export const Input = () => { 
    
    let inputValue = React.createRef()

   

    return (
        <input className='input' type="text" ref={inputValue} placeholder="Title..."/>
    )
}