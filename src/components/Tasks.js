import PropTypes  from 'prop-types'
import Task from './Task'

/*const Tasks = [{id:1,
text:"Meeting at School", day:"Feb 6th", reminder: true,},
{id:2,
    text:"Food shopping", day:"Feb 5th", reminder: true,},
    {id:3,
        text:"Meeting at School", day:"Feb 5th", reminder: false,}]*/
const Tasks = ({tasks, onDelete, onToggle}) => {

   
// <h3 key={tasks.id}>{tasks.text}</h3>

    return (
        <>
        {tasks.map((task)=> (
                <Task key={task.id} task={task} onDelete={onDelete} onToggle ={onToggle} />
            ))}
        
        
        </>
    ) 
  
}

export default Tasks