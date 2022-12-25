import '../../index.css';
import React from 'react';
import { useState } from 'react';


export const Input = ({ addTodo}) => { 
    
    
    // console.log(click)
    // console.log(count)

    // function clearInputValue(click) {
    //     if (click !== count) {
    //         count += 1
            
    //     } setCount(count)
    // }
//     const handleValueChange = (event) => {
//         onChange(event.target.value)
      
       
//    }

   
   

    return (
        <input className='input' type="text" placeholder="Enter your note here..." onChange={(e)=> {addTodo(e.target.value)}}/>
    )
}