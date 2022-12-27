import { useState } from 'react';
import '../../index.css';



export const ToDoList = ({ todo, changeTodo, todos, setTodos}) => { 

    // console.log(todo)

       const removeTodo = (id) => {
//    console.log(todos)
//         //need a bugfix
       const copyArr =[...todos]
      
        const elemToDelete = copyArr.find(t => t.id === id)
        const index = copyArr.indexOf(elemToDelete)
     
        copyArr.splice(index, 1)
        console.log(copyArr)
        
        setTodos(copyArr)
        console.log(todos)
        
    
    }



    return (
       
             <li className={`list__item ${todo.isCompleted ? 'checked' : ''}`} onClick={()=> {changeTodo(todo.id)}} >{todo.title}
            <button  className='closeBtn' type='button' onClick={()=> {removeTodo(todo.id)}}>×</button>
        </li>
      
    )
}