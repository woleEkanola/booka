import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import{ Books }from '../../api/books'
 
import {   
    Route, 
    Link} from 'react-router-dom'

    import NewBook from '../components/NewBook'
    import BookList from '../components/BookList'


class AuthorDashboard extends Component{
  constructor(props){
    super(props)
  }
 
render(){
    return (
      <div className="container">
       <h1> Author Dashboard</h1>
       <Link to= {`${this.props.match.path}/create-new-book`}>Create a New Book</Link>
       <Link to= {`${this.props.match.path}/view-books`}>View books you created</Link>
       <Route path= {`${this.props.match.path}/create-new-book`}  render= {props=>(<NewBook books= {this.props.books}/>)}/>
       <Route path= {`${this.props.match.path}/view-books` }   render=  {props=><BookList {...props} books= {this.props.books}/>}   />
      </div>
    );
  }
}
export default withTracker(() => {
    return {
      books: Books.find({}).fetch(),
    };
  })( AuthorDashboard);
