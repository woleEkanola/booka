import React, { Component } from 'react';
import {Books} from '../../api/books'

import EditBook from '../components/EditBook'

import {   
  Route, 
  Link} from 'react-router-dom'

export default class BookList extends Component {
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
    const displayBooks = this.props.books.map(book=>{
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
    return (
      <div className="container">
       <h1> {this.props.books? `You have ${this.props.books.length} books`: 'You currently have not created any book'}</h1>
       <hr/>
     <div>
       {this.state.showList  ? displayBooks: ''}
       </div>  
       <Route path= {`${this.props.match.path}/:id`}  render= {props=>(<EditBook {...props} hideList= {this.hideList.bind(this)} />)}  />
      </div>
    );
  }
}