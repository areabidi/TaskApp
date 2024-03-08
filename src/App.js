
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



    /*/<h2>{varible}</h2>*/
  return (
      <div className="App">
         
          <Header title='Task Manager' />
          <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
