import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import {Books} from '../../api/books'
import Markdown from 'markdown-to-jsx';
 
 

 class ReadBook extends Component {
  constructor(props){
      super(props)
this.state= {
    currentChapter: 0
}

  }
  componentWillMount(){
      let x= this.props.book
      let y= x.findIndex(xx=>{
          return xx._id== this.props.match.params.id
      }) 
     let z= this.props.book[y]
this.setState({book: z})
  }
 showChapter(){
   
 }

 nextChapter(){
    let x = this.state.currentChapter
    let z = this.state.book.chapters - 1
    let y= x+1
    if(y>z){
        y = z
    }
    this.setState({currentChapter: y})
 }
 prevChapter(){
    let x = this.state.currentChapter
    let y= x-1
    if(y<0){
        y = 0
    }
    this.setState({currentChapter: y})
}
  render() {
    const cc = this.state.currentChapter
  const title =  this.state.book.chapterContent[cc].title
  const text =  this.state.book.chapterContent[cc].text
   
   
        return (
      <div className="container">
      <h1>{title}</h1>
       <Markdown>{text}</Markdown>
       <div className='controls'>
       <p onClick= {this.prevChapter.bind(this)}> previous </p>   <p  onClick= {this.nextChapter.bind(this)}> next </p>
       </div>
      </div>
    );
  }
}

export default withTracker(() => {
  
    return {
      book: Books.find({}).fetch(),
    };
  })( ReadBook);