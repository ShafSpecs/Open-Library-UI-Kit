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
          <Route path='/introduction' render={(props) => <PageLayout {...props} title='Introduction'/>}/>
          <Route path='/getting-started' render={(props) => <PageLayout {...props} title='Getting Started'/>}/>
          <Route path='/examples' render={(props) => <PageLayout {...props} title='Examples'/>}/>
          <Route path='/button' render={(props) => <PageLayout {...props} title='Buttons'/>}/>
          <Route path='/input' render={(props) => <PageLayout {...props} title='Input'/>}/>
          <Route path='/checkboxes' render={(props) => <PageLayout {...props} title='Checkboxes'/>}/>
          <Route path='/menu' render={(props) => <PageLayout {...props} title='Menu'/>}/>
          <Route path='/table' render={(props) => <PageLayout {...props} title='Tables'/>}/>
          <Route path='/dropdown' render={(props) => <PageLayout {...props} title='Dropdown'/>}/>
          <Route render={() => <h1>404</h1>}/>
        </Switch>
      </main>
    </Router>
  )
}

export default App