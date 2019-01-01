import React, { Component } from 'react';
import {Books} from '../../api/books'
import { withTracker } from 'meteor/react-meteor-data';
import {   
    Route, 
    Link} from 'react-router-dom'
  

 class Shop extends Component {
  constructor(props){
      super(props)
      this.state= {
         books:{}
      }
  }
 componentWillMount(){
     let x = this.props.book
    let y = x.filter(xx=>{
        return xx.publish == true
    })
    console.log(y)
    this.setState({books: y})
   
 }
  render() {
      const books = this.state.books.map(book=>{
          return(
              <div key= {book._id}>
              <Link to={`/read/${book._id}`}>
                  <img src={book.bookCover} />
                  <h4> {book.bookTitle}</h4>
                </Link>
                  </div>
          )
      })
    return (
      <div className="shop">
     
      <div className='bkLst'>
          {books}
          </div>
      </div>
    );
  }
}
export default withTracker(() => {
  
    return {
      book: Books.find({}).fetch(),
    };
    
  })( Shop);