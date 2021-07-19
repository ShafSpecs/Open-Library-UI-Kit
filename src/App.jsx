import React from 'react'
import Homepage from './Landing Page/Hompage'
import './App.css'

function App() {
  window.addEventListener('resize', () => {
    location.reload()
  })

  return (
    <div>
      <Homepage />
    </div>
  )
}

export default App
