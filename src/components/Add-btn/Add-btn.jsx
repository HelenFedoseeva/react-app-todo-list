
import { isDocument } from '@testing-library/user-event/dist/utils';
import '../../index.css';

export const AddBtn = () => {
    
    function onAddBtnClick(e) {
        console.log(e)
        return (
            <li className='list__item'>Organize the Trello for tomorrow<button className='closeBtn' type='button'>×</button></li>
        )
    }

    return (
    <button onClick={onAddBtnClick} className='addBtn' type="button">Add</button>
)
}