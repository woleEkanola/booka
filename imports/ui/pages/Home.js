import React, { Component } from 'react';

var dir = 1

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state= {
      img: ['img1', 'img2', 'img3'],
      color: ['yellow', 'green', 'white'],
      colorr: 0,
     
    }
  }
  componentWillMount(){
setInterval(this.changeImg.bind(this), 10000)
  }
  changeImg(){
   
    let x = this.state.colorr
    let y = this.state.color.length - 1
    
    if(x<y && dir == 1 ){
x += 1

    }else if (x==y){
      dir = 0
      x -= 1
    }else if(x==0){
      dir = 1
      x += 1
    } else if (x<y && dir == 0){
      x -= 1
    }
  this.setState({colorr: x})
  console.log(dir)
  } 
  render() {
    const x = this.state.colorr
    
    return (
      <div className={`hmbg ${this.state.color[x]}`}>
      <div className={`hmPg ${this.state.img[x]}`}>
       <img src='bk1.png' />
       <img src='bk2.png' />
       <img src='bk3.png' />
      </div>
      <p className= 'but' onClick={this.changeImg.bind(this)} >xxx</p>
      </div>
    );
  }
}