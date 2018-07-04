import React, { Component } from 'react';

import { 
  
    Link} from 'react-router-dom'

export default class Nav extends Component {
  
 
  render() {
    return (
     
<div className='Nav' >
<div className='logo' >
<img src='booka.png' /> 
</div>
<div className='links' >
<Link to= '/'>Home</Link>
<Link to= '/about'>About</Link>
<Link to= '/features'> Booka Features</Link>
<Link to= '/how-Booka-works'>How it works</Link>
<Link to= '/Author-dashboard'>Sign In as Author</Link>
<Link to= '/booka-shop'>Buy Books</Link>
  </div> 
  </div> 
    );
  }
}

