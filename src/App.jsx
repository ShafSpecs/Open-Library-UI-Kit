// import React
import React from 'react'

// import React Router
import { BrowserRouter as Router, Route } from 'react-router-dom'

// import required components
import Homepage from './Landing Page/Hompage'

// import styles
import './App.css'

function App() {
  window.addEventListener('resize', () => {
    location.reload()
  })

  return (
    <Router>
      <main>
        <Route path='/' component={Homepage}/>
      </main>
    </Router>
  )
}

export default App
