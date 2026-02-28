import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className='App'>
      <div className='Header'>
        <div className='Logo'>List & Do</div>
      </div>
      <div className='Container'>
        <div className='High'>🔴 High Priority 🔴<hr></hr></div>
        <div className='Medium'>🟡 Medium Priority 🟡<hr></hr></div>
        <div className='Low'>🟢 Low Priority 🟢<hr></hr></div>
      </div>
      <div className='Footer'>© 2026 List & Do</div>
    </div>
  )
}

export default App
