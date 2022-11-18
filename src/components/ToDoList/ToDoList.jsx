import '../../index.css';

export const ToDoList = () => { 
    return (
        <ul className='list'>
            <li className='list__item'>Hit the gym</li>
            <li className='list__item checked'>Pay bills</li>
            <li className='list__item'>Meet Gregore</li>
            <li className='list__item'>Buy pizza</li>
            <li className='list__item'>Create an app</li>
            <li className='list__item'>Organize the Trello for tomorrow</li>
        </ul>
    )
}