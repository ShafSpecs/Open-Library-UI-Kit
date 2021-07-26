// import React
import React from 'react'

// import React Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// import required components
import Homepage from './Landing Page/Hompage'
import PageLayout from './modules/Layouts/PageLayout'

// import styles
import './App.css'

function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route path='/' exact component={Homepage}/>
          <Route path='/introduction' component={PageLayout}/>
          <Route render={() => <h1>404</h1>}/>
        </Switch>
      </main>
    </Router>
  )
}

export default App
