import React, { Component } from 'react';

class Counter extends Component {

constructor(){
    super()

    this.state = {count:0}
}

onIncrement = () =>{
    //this.setState({
      //  count: this.state.count+1 (object)
    //}, ()=>{
        //console.log(`callback value ${this.state.count}`)
      //  console.log('callback value',  this.state.count)// callback function
    //})
    //console.log(this.state.count)//synchronous
this.setState(prevState =>({  //(callback function using instead of object)
 count: prevState.count+5
}))
console.log(this.state.count)
}

  render() {
    return(
        <div>

        <div>count = {this.state.count}
        </div>
        <button onClick = {this.onIncrement}>Increment</button>
        </div>
    
    ) 
  }
}

export default Counter;
