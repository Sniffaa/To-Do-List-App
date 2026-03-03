import { useState } from 'react'
import './App.css'

function App() {

  const [taskInput, setInput] = useState('');
  const [taskPriority, setPriority] = useState('');
  const [task, setTasks] = useState({ high: [], medium: [], low: [] });

  // Grabs What List To Store Task In And Adds The Users Text Into The Selected List
  function createTask() {setTasks(prev => ({...prev,[taskPriority]: [...prev[taskPriority],taskInput]}));
  // Resets Fields Back To Empty
  setInput('');
  setPriority('');
  }

  return (
    <div className='App'>
      <div className='Header'>
        <div className='Logo'>List & Do</div>
      </div>
        <p>To add a new task, type your task into the input box, then click the Submit button.</p>
      <div className='Form'>
        <input className='HighRadio'type='radio' value='high' name='Option' checked={taskPriority === 'high'} onChange={(e) => setPriority(e.target.value)}/>
        <input className='MediumRadio' type='radio' value='medium' name='Option' checked={taskPriority === 'medium'} onChange={(e) => setPriority(e.target.value)}/>
        <input className='LowRadio' type='radio' value='low' name='Option' checked={taskPriority === 'low'} onChange={(e) => setPriority(e.target.value)}/>
        <input className='Box' value={taskInput} onChange={(e) => setInput(e.target.value)}/>
        <button className='Add' onClick={createTask}>Add</button>
      </div>
        <hr/>
      <div className='Lists'>
        <div className='HighList'>🔴 High Priority 🔴<hr/>
        {task.high.map((task, index) => (<div key={index}>{task}</div>))}
        </div>
        <div className='MediumList'>🟡 Medium Priority 🟡<hr/>
          {task.medium.map((task, index) => (<div key={index}>{task}</div>))}
        </div>
        <div className='LowList'>🟢 Low Priority 🟢<hr/>
        {task.low.map((task, index) => (<div key={index}>{task}</div>))}
        </div>
      </div>
      <div className='Footer'>© 2026 List & Do</div>
    </div>
  )
}

export default App