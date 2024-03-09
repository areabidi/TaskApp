
//import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
  const[tasks, setTasks] = useState([
    {id:1, text:"Meeting at School", day:"Feb 6th", reminder: true,},
    {id:2, text:"Food shopping", day:"Feb 5th", reminder: true,},
    {id:3, text:"Meeting at School", day:"Feb 5th", reminder: false,}
])



//toggle reminder
const toggleReminder=(id) => {
  console.log(id);
  setTasks(
    tasks.map((task)=>
      task.id === id ? {... task, reminder: !task.reminder} : task
    )
  )
}







//Detelet task 
const deleteTask = (id) => {

//console.log('delete', id)
setTasks(tasks.filter((task) => task.id !== id))

}

    /*/<h2>{varible}</h2>*/
  return (
      <div className="container">
         
          <Header title='Task Manager' />
          { tasks.length > 0?(
            <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}
            />):('No Tasks To Show')
            
          }
    </div>
  );
}

export default App;
