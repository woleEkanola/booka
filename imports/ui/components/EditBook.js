import React, { Component } from 'react';
import {Books} from '../../api/books'
import { withTracker } from 'meteor/react-meteor-data';

var dd = function(x){
  return x
}

 class EditBook extends Component {
  constructor(props){
    super(props)
    this.state= {
      book:{},
      canPublish: false
      
    }
  }
  componentWillMount(){
   
    var xx = this.props.match.params.id

  let book = this.props.book.findIndex(function(bk){
   return  bk._id == xx
  })

  this.setState({book: this.props.book[book] })
  let a =  this.props.book[book]
  let b= []
  let c = this.state.chapterContent
  let chapters = []

  if(!c){
    // chapter has never been created
    for(let i = 1 ; i<=a.chapters; i++ ){
      let xx = {
        name: `Chapter ${i}`,
        title: 'Please fill the chapter Title here',
        text: 'Please paste chapter content here',
        count: i,
        ind: i-1
      }
     chapters.push(xx)
         }
         this.setState({chapterContent: chapters})
  }
  
       
  }
handleChangeDescription(e){
  let tBk = this.state.book

tBk.description = e.target.value
  this.setState({book:tBk})


}

 handleChangeTitle(x, e){

let tBk = this.state.chapterContent

tBk[x].title = e.target.value
  this.setState({chapterContent:tBk})
 }
 handleChangeText(x, e){

  let tBk = this.state.chapterContent
  
  tBk[x].text = e.target.value
    this.setState({chapterContent:tBk})
   }
   save(){
     let x = this.state.chapterContent
    let y = this.state.book


 Books.update(this.props.match.params.id,{
    $set: { description: y.description,
            chapterContent: x}
  
  })
this.setState({canPublish: true})
   }
   publish(){
    let x = this.state.chapterContent
   let y = this.state.book


Books.update(this.props.match.params.id,{
   $set: { publish: true
          }
 
 })

  }

  render() {
    
let x= this.state.chapterContent
var that = this
     const chapters= x.map( chp=>{
      console.log(this.state.chapterContent[chp.ind].title)
       return(
        <div key= {chp.ind} >   
       
          <h1>{chp.name}</h1>
        <input type='text' onChange= {this.handleChangeTitle.bind(this, chp.ind)} value={ that.state.chapterContent[chp.ind].title} />
        <textarea type='text' onChange= {this.handleChangeText.bind(this, chp.ind)} value={ that.state.chapterContent[chp.ind].text} />
        <hr />
        </div>
       )
     })
    
  
    return (
      <div className="edtBk">
        
    <h1>{this.state.book.bookTitle} </h1>
   <label htmlFor = 'description'> Book Description</label> <textarea onChange={this.handleChangeDescription.bind(this)} name='description' value= {this.state.book.description}></textarea>
    <div>
      <p> Upload PDF</p>
      <div>
      <input type = 'file' />
      </div>

      <p> paste Chapter by chapter</p>
      <div>
{chapters}
        </div>
        <div className= 'controls' >
        <img src={this.state.book.bookCover} className='' />
       <button onClick={this.save.bind(this)}> Save </button> 
     {this.state.canPublish ? <button onClick={this.publish.bind(this)}> Publish  </button>: '' }
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
})( EditBook);
