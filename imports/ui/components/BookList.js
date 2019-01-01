import React, { Component } from 'react';
import {Books} from '../../api/books'
import { withTracker } from 'meteor/react-meteor-data';

import EditBook from '../components/EditBook'

import {   
  Route, 
  Link} from 'react-router-dom'

 class BookList extends Component {
  constructor(props){
    super(props)
    this.state= {
      showList:true
    }
  }
  componentDidMount(){
 if(this.props.match.isExact){
  this.setState({
    showList:true
  })
 }else{
  this.setState({
    showList:false
  })
 }
  }
 hideList(){
  this.setState({
    showList:false
  })
 }

  render() {
    let displayBooks = '';
    if(this.props.books){
   displayBooks = this.props.books.map(book=>{
      return(
        <div key= {book._id} >
        <Link to={`${this.props.match.path}/${book._id}`} onClick={this.hideList.bind(this)} >
        <img src= {book.bookCover} /> 
        <h1> {book.bookTitle}</h1>
        </Link>
        <hr />
        </div>
      )
    })
  }
    return (
      <div className="bkLstBg">
       <h1> {this.props.books? `You have ${this.props.books.length} books`: 'You currently have not created any book'}</h1>
       <hr/>
     <div className='bkLst' >
       {this.state.showList  ? displayBooks: ''}
       </div>  
       <Route path= {`${this.props.match.path}/:id`}  render= {props=>(<EditBook {...props} hideList= {this.hideList.bind(this)} />)}  />
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    books: Books.find({}).fetch(),
  };
})( BookList);