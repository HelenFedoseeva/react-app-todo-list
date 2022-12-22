import { Input } from "components/Input/Input"
import { AddBtn } from "components/Add-btn/Add-btn"
import { ToDoList } from "components/ToDoList/ToDoList";
import { useState } from "react";
import '../../index.css';



export const Section = () => {
    const [value, setValue] = useState('')
    const [click, setClick] = useState(0)
   

    const handleValueChange = (value) => {
        setValue(value)

    }

    const handleBtnChange = (click) => { 
        
        setClick(click)
    }

   


    return (
        <section>
            <div className="header__wrapper">
                <div className="container">
                    <h1 className="title">My To Do List</h1>
                    <Input click={click}   onChange={handleValueChange}/>
                    <AddBtn onClick={handleBtnChange}/>
                </div>
            </div>
                 <ToDoList click={click}  value={ value }/>
        </section>
    )
}