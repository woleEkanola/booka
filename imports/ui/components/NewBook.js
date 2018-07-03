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
    this.state= {}
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
 
  render() {
    return (
      <div className="container">
       <h1> Create New Book</h1>
       <hr/>
       <Form onSubmit={submittedValues => this.handleSubmit( submittedValues)}>
    {formApi => (
      <form onSubmit={formApi.submitForm} id="form2" refs= 'form'>
        <label htmlFor="bookTitle">Book Title</label>
        <Text field="bookTitle" id="bookTitle" name= "bookTitle" />
        <label htmlFor="description">Description</label>
        <TextArea field="description" id="description" name= 'description ' />
       
        <label htmlFor="chapters">How Many chapters</label>
        <Text type='number' field="chapters" id="chapters" name= 'chapters'/>
        <label htmlFor="bookCover">Book Cover</label>
        <Text field="bookCover" id="bookCover"  name='bookCover' placeholder= 'Book cover image url'/>
        <label htmlFor="OPNpages" className="d-block">Opening Pages</label>
        <Select field="OPNpages" id="OPNpages" options={OPNpagesOptions} className="mb-4" />
        <button type="submit" className="mb-4 btn btn-primary">
          Submit
        </button>
      </form>
    )}
  </Form>
      </div>
    );
  }
}