import { Input } from "components/Input/Input"
import { AddBtn } from "components/Add-btn/Add-btn"
import { ToDoList } from "components/ToDoList/ToDoList";
import '../../index.css';


export const Section = () => {


    return (
        <section>
                <div className="header__wrapper">
                <div className="container">
                    <h1 className="title">My To Do List</h1>
                <Input/>
                <AddBtn/>
                </div>
            </div>
                 <ToDoList/>
        </section>
    )
}