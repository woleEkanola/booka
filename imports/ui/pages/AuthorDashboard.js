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

    this.state= {
      published: 0,
      manuscript: 0
    }
  }
 componentWillMount(){
  let x = this.props.book
  let y = x.filter(xx=>{
      return xx.publish == true
  })
  console.log(x)
  this.setState({
    published: y.length,
    manuscript: x.length - y.length
  })
 
 }
render(){
    return (
      <div className="author">
       <div className='authorBg' > 
       <div className= 'authorTxt'>
       <h1>Welcome !</h1>
       <h3>Welcome Adamu OluFemi Chibuzo</h3>
       <p>You have {this.state.manuscript} unpublished manuscripts and {this.state.published} published Books</p>
       </div>
       <div className= 'authorBtn'>
       <Link to= {`${this.props.match.path}/create-new-book`}>Create a New Book</Link>
       <Link to= {`${this.props.match.path}/view-books`}>View books you created</Link>
       <Route path= {`${this.props.match.path}/create-new-book`}  render= {props=>(<NewBook books= {this.props.books}/>)}/>
       <Route path= {`${this.props.match.path}/view-books` }   render=  {props=><BookList {...props} books= {this.props.books}/>}   />
      </div>
      </div>
      </div>
    );
  }
}
export default withTracker(() => {
    return {
      book: Books.find({}).fetch(),
    };
  })( AuthorDashboard);
