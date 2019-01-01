import React, { Component } from 'react';
 import{ Books }from '../../api/books'
import { Form, Text, TextArea, Radio, RadioGroup, Select, Checkbox, Number } from 'react-form';

const OPNpagesOptions = [
  {
    label: 'Automatically Generate',
    value: false,
  },
  {
    label: 'I will upload',
    value: true,
  }
]
 

export default class NewBook extends Component {
  constructor(props){
    super(props)
    this.state= {
      slide: ['one','two', 'three'],
      Cslide: 0,
      showNBotton: true,
      showPBotton: true
    }
  }
  handleSubmit(x){
x.dateCreated = new Date
Books.insert(x)
let frm = document.getElementById('form2')
frm.bookTitle.value= ''
frm.description.value=''
frm.chapters.value= ''
frm.bookCover.value= ''

  }
 nextSlide(){
   this.setState({showPBotton: true})
   let a = this.state.slide
   let b= a.length - 1 
   let z= this.state.Cslide
if(z< b){
z += 1

}else if(z== b){
 this.setState({
   showNBotton: false
 })
}
this.setState({
  Cslide: z
})
 }

prevSlide(){
  this.setState({showNBotton: true})
  let a = this.state.slide
  let b= a.length - 1 
  let z= this.state.Cslide
if(z<= b){
z -= 1

}else if(z== 0){
this.setState({
  showPBotton: false
})
}
this.setState({
 Cslide: z
})
}
  render() {
    var x= this.state.Cslide
    return (
      <div className="nwBkr">
       <h1> Create New Book</h1>
       <hr/>
       <Form onSubmit={submittedValues => this.handleSubmit( submittedValues)}>
    {formApi => (
      <form onSubmit={formApi.submitForm} id="form2" refs= 'form' className={this.state.slide[x]} >
      <div>
        <label htmlFor="bookTitle">Book Title</label>
        <Text field="bookTitle" id="bookTitle" name= "bookTitle" />
        <label htmlFor="bookCover">Book Cover</label>
        <Text field="bookCover" id="bookCover"  name='bookCover' placeholder= 'Book cover image url'/>
        </div>
        <div>
        <label htmlFor="description">Description</label>
        <TextArea field="description" id="description" name= 'description ' />
       </div>
<div>
        <label htmlFor="chapters">How Many chapters</label>
        <Text type='number' field="chapters" id="chapters" name= 'chapters'/>



        <label htmlFor="OPNpages" className="d-block">Opening Pages</label>
        <Select field="OPNpages" id="OPNpages" options={OPNpagesOptions} className="mb-4" />

        <button type="submit" className="">

          Submit
        </button>
        </div>
      </form>
    )}
  </Form>
  <div className='nwBkrNav' >
  {this.state.showPBotton ? <button onClick={this.prevSlide.bind(this)}>  Previous    </button>: ''} {this.state.showNBotton ? <button onClick={this.nextSlide.bind(this) }> Next   </button>: ''}</div>
      </div>
    );
  }
}