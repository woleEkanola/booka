import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link} from 'react-router-dom'

  import Home from './pages/Home'
  import About from './pages/About'
  import Features from './pages/Features'
  import HowItWorks from './pages/HowItWorks'
  import AuthorDashboard from './pages/AuthorDashboard'
  import Shop from './pages/Shop'
  import ReadBook from './pages/ReadBook'


 
 

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
       <div>
       <Link to= '/'>Home</Link>
       <Link to= '/about'>About</Link>
       <Link to= '/features'> Booka Features</Link>
       <Link to= '/how-Booka-works'>How it works</Link>
       <Link to= '/Author-dashboard'>Sign In as Author</Link>
       <Link to= '/booka-shop'>Buy Books</Link>
         </div> 
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