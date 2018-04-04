import React, { Component } from 'react'
import logo from './logo.svg'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import './App.css'
import Interests from './pages/interests/index'
import IndividualTour from './pages/recommendations/tour'
import Recommendations from './pages/recommendations/list'
import Experiences from './pages/experience-type/index'
import Schedule from './pages/schedule/index'
// import Haunted from './pages/experience-type/Haunted'
import History from './pages/experience-type/History.js'
// import Adventure from './pages/experience-type/Adventure'

//
// <Route path="/interests/adventure"component={Adventure}/>
// <Route path="/interests/haunted" component={Haunted}/>
// <Route path="/days" component={Days}/>
// <Route path="/times"component={Times}>
// <Route path="/recommendations" component={Recommendations}>
// <Route path="/interests/Culinary" component={Culinary} />
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/interests/History" component={History} />
            <Route path="/interests" component={Interests} />
            <Route path="/experiences" component={Experiences} />
            <Route path="/schedule" component={Schedule} />
            <Route path="/recommendations/:id" component={IndividualTour} />
            <Route path="/recommendations" component={Recommendations} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
