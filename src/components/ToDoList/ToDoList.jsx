
import '../../index.css';



export const ToDoList = ({ todo, changeTodo, todos, setTodos}) => { 


      

       const removeTodo = (id) => {
//         //need a bugfix
           
    //    const copyArr =[...todos]
      
    //     const elemToDelete = copyArr.find(t => t.id === id)
    //     const index = copyArr.indexOf(elemToDelete)
     
    //     copyArr.splice(index, 1)
    //     console.log(copyArr)
        
    //        setTodos(copyArr)
    //     console.log(todos)
           console.log(123)
           setTodos([...todos].filter(t => t.id !== id))
    
    }



    return (
       
             <li className={`list__item ${todo.isCompleted ? 'checked' : ''}`} onClick={()=> {changeTodo(todo.id)}} >{todo.title}
            <button  className='closeBtn' type='button' onClick={()=> {removeTodo(todo.id)}}>×</button>
        </li>
      
    )
}