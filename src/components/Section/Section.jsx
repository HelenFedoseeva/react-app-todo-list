import { Input } from "components/Input/Input"
import { AddBtn } from "components/Add-btn/Add-btn"
import { ToDoList } from "components/ToDoList/ToDoList";
import { useState } from "react";
import '../../index.css';


 export const toDoArray = [{
    title: 'Hit the gym',
    id: 'dgdg46',
    isCompleted: false,
},
{
    title: 'Pay bills',
    id: 'strhrth4',
    isCompleted: false,
    },
{
    title: 'Buy pizza',
    id: 'are687',
    isCompleted: false,
}]

export const Section = () => {
   
    const [todos, setTodos] = useState(toDoArray)
  
    
   
    const changeTodo = (id) => {
        const copyArr = [...todos]
        const current = copyArr.find(t => t.id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copyArr)
      
    }

//     const removeTodo = (id) => {
// //    console.log(todos)
// //         //need a bugfix
//        const copyArr =[...todos]
      
//         const elemToDelete = copyArr.find(t => t.id === id)
        
//         const index = copyArr.indexOf(elemToDelete)
//        console.log(index)
     
//         copyArr.splice(index, 1)
//         console.log(copyArr)
        
//         setTodos(copyArr)
//         console.log(todos)
        
    
//     }


   


    return (
        <section>
            <div className="header__wrapper">
                <div className="container">
                    <h1 className="title">My To Do List</h1>
                    <Input  setTodos={setTodos} />
                    <AddBtn />
                </div>
            </div>
            <ul className="list">
                {todos.map(todo => <ToDoList key={todo.id} todo={todo} changeTodo={ changeTodo } todos={todos} setTodos={setTodos} />)}
            </ul>
            
        </section>
    )
}
