import React, { Component } from 'react'
import logo from './logo.svg'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import './App.css'
// <Route path="/interests" component={Interests}/>
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
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
