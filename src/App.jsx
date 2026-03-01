import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className='App'>
      <div className='Header'>
        <div className='Logo'>List & Do</div>
      </div>
        <p>To add a new task, type your task into the input box, then click the Submit button. Your task will then be added to the list you selected.</p>
      <div className='Input'>
        <input className='HighRadio' type='radio' title='High Priority' name='Option'></input>
        <input className='MediumRadio' type='radio' title='Medium Priority' name='Option'></input>
        <input className='LowRadio' type='radio' title='Low Priority' name='Option'></input>
        <input className='Box'></input>
        <input className='Add' type='submit'></input>
      </div>
        <hr></hr>
      <div className='Container'>
        <div className='HighList'>🔴 High Priority 🔴<hr></hr></div>
        <div className='MediumList'>🟡 Medium Priority 🟡<hr></hr></div>
        <div className='LowList'>🟢 Low Priority 🟢<hr></hr></div>
      </div>
      <div className='Footer'>© 2026 List & Do</div>
    </div>
  )
}

export default App
