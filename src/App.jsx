import React, { useState } from 'react'
import PageLayout from './modules/Layouts/PageLayout'
import './App.css'

function App() {
  window.addEventListener('resize', () => {
    location.reload()
  })

  return (
    <div>
      <PageLayout />
    </div>
  )
}

export default App
