import React, { Component } from 'react'
import logo from './logo.svg'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import './App.css'
import Interests from './pages/interests/index'
import IndividualTour from './pages/recommendations/tour'

// <Route path="/interests/history" component={History}/>
// <Route path="/interests/culinary"component={Culinary}/>
// <Route path="/interests/adventure"component={Adventure}/>
// <Route path="/interests/haunted" component={Haunted}/>
// <Route path="/days" component={Days}/>
// <Route path="/times"component={Times}>
// <Route path="/recommendations" component={Recommendations}>

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/interests" component={Interests} />
            <Route path="/recommendations/:id" component={IndividualTour}>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
