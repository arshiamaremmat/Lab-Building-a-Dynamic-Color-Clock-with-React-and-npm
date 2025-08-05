// src/App.jsx
import { useEffect, useState } from 'react'
import { format } from 'date-fns'
import './App.css'

function App() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="clock-container">
      <h1>Color Clock</h1>
      <p className="time-display">
        {format(currentTime, 'PPpp')}
      </p>
    </div>
  )
}

export default App
