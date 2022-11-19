import '../../index.css';

export const ToDoList = () => { 
    return (
        <ul className='list'>
            <li className='list__item'>Hit the gym
                <button className='closeBtn' type='button'>×</button>
            </li>
            <li className='list__item checked'>Pay bills
            <button className='closeBtn' type='button'>×</button></li>
            <li className='list__item'>Meet Gregore<button className='closeBtn' type='button'>×</button></li>
            <li className='list__item'>Buy pizza<button className='closeBtn' type='button'>×</button></li>
            <li className='list__item'>Create an app<button className='closeBtn' type='button'>×</button></li>
            <li className='list__item'>Organize the Trello for tomorrow<button className='closeBtn' type='button'>×</button></li>
        </ul>
    )
}