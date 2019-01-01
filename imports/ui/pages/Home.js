import React, { Component } from 'react';

var dir = 1

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state= {
      img: ['img1', 'img2', 'img3'],
      color: ['yellow', 'green', 'white'],
      colorr: 0,
      activeU:true
     
    }
  }
  componentWillMount(){
setInterval(this.changeImg.bind(this), 10000)
  }
  changeImg(){
   var that= this
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

  switch (x) {
    case 0:
        that.setState({activeU: true, activeD:false, activeT:false});
        break;
    case 1:
that.setState({activeU: false, activeD:true, activeT:false});
        break;
    case 2:
    that.setState({activeU: false, activeD:false, activeT:true});
        break;
    
}
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

      <p className=  {`sldrtxt  ${this.state.activeU ? 'un': '' }`}>Booka gets your books to the readers in no time!</p>
      <p className=  {`sldrtxt  ${this.state.activeD ?'deux':'' }`}>Focus on creating content , We will do the DIRTY WORK</p>
      <p className=  {`sldrtxt  ${this.state.activeT ? 'troir': '' }`}>Your books availble to readers on all platforms no Technology barrier!</p>
      </div>
    );
  }
}