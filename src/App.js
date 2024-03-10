
//import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

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



//addTask
const addTask = (task) => {
console.log(task);
const id = Math.floor(Math.random()*10000)+1
const newTask ={id, ...task}
setTasks([...tasks, newTask])
}



//Detelet task 
const deleteTask = (id) => {
console.log('delete', id)
setTasks(tasks.filter((task) => task.id !== id))

}

    /*/<h2>{varible}</h2>*/
  return (
      <div className="container">
         
          <Header title='Task Manager' />
          <AddTask onAdd={addTask}/>
          { tasks.length > 0?(
            <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}
            />):('No Tasks To Show')
            
          }
    </div>
  );
}

export default App;
