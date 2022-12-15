import { Input } from "components/Input/Input"
import { AddBtn } from "components/Add-btn/Add-btn"
import { ToDoList } from "components/ToDoList/ToDoList";
import { useState } from "react";
import '../../index.css';


export const Section = () => {
    const [value, setValue] = useState('')

    const handleValueChange = (value) => {
        setValue(value)

    }

    return (
        <section>
                <div className="header__wrapper">
                <div className="container">
                    <h1 className="title">My To Do List</h1>
                <Input onChange={handleValueChange}/>
                    <AddBtn />
                </div>
            </div>
                 <ToDoList  value={ value }/>
        </section>
    )
}