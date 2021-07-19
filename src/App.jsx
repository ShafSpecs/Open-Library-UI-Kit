import React, { useState } from 'react'
import PageLayout from './modules/Layouts/PageLayout'
import Homepage from './homepage/Hompage'
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
