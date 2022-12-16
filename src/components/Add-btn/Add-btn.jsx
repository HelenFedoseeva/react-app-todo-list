
import { useState } from 'react';
import '../../index.css';

export const AddBtn = ({onClick}) => {

    const [count, setCount] = useState(0)

    // const handleOnAddBtnClick = () => {
    //     let clickCount = count;
    //     clickCount ++;
    //     setCount(clickCount)
    // }

    const handleBtnChange = (e) => {
        let click = count;
        click++;
        setCount(click)
        onClick(click)
   
    }
    
    return (
      
            <button onClick={handleBtnChange}  className='addBtn' type="button">Add</button>
        
)
}