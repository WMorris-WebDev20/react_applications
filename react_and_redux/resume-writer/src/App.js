import React from 'react'
import FormType from './components/forms/FormType'
import WorkHistory from './components/lists/WorkHistory.js'
import TvCollection from './components/resume/Resume.js'
import { Switch, Route } from 'react-router-dom'
import NavBar from './navbar/Navbar'
import Footer from './footer/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
    <NavBar />
      <Switch>
        <Route exact path='/' component={FormType} />
        <Route path='/workhistory' component={WorkHistory} />
        <Route path='/resume' component={TvCollection} />
      </Switch>
      <Footer />

    </div>
  );
}

export default App