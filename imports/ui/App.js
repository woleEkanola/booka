import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
 } from 'react-router-dom'

  import Home from './pages/Home'
  import About from './pages/About'
  import Features from './pages/Features'
  import HowItWorks from './pages/HowItWorks'
  import AuthorDashboard from './pages/AuthorDashboard'
  import Shop from './pages/Shop'
  import ReadBook from './pages/ReadBook'
  import Nav from './components/Nav'


 
 

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: {},
      userType: 0,
      authenticated: false,

    }
  }
  
 
  render() {
    return (
      
      <Router>
        <div>
      <Nav />
      <Switch>
       <Route path= '/' exact component= {Home}/> 
       <Route path= '/about'  component= {About}/> 
       <Route path= '/features' component= {Features}/> 
       <Route path= '/how-Booka-works'  component= {HowItWorks}/> 
       <Route path= '/Author-dashboard'  component= {AuthorDashboard}/> 
       <Route path= '/booka-shop'  component= {Shop}/> 
       <Route path= '/read/:id'  component= {ReadBook}/> 
      </Switch>
      </div>
      </Router>
     
    );
  }
}