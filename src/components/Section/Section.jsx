import { Input } from "components/Input/Input"
import { AddBtn } from "components/Add-btn/Add-btn"
import '../index.css';


export const Section = () => {
    return (
        <>
        <div className="header__wrapper">
            <h1 className="title">My To Do List</h1>
            <Input/>
            <AddBtn/>
        </div>
        </>
    )
}