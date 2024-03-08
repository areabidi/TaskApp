import {FaTimes} from 'react-icons/fa'
const Task =({task, onDelete, onToggle}) => {
    return(
        <div className= 'task' onDoubleClick={()=>onToggle(task.id)}>
            <h4>{task.text} <FaTimes style={{color: 'red', cursor:'pointer'}} onClick={() => onDelete(task.id)}
            />
            </h4>
            <p>{task.day}</p>



        </div>
    )


}

export default Task