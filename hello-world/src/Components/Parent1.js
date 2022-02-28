import React, { Component } from 'react';
import Child1 from './Child1';

class Parent1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         ParentName:'Parent'
      }
    }
    
    greetParent = (childName)=>{
        alert(`Hello ${this.state.ParentName} from ${childName}`)
    }

    
  render() {
    return (<div>
        <Child1 greetHandler = {this.greetParent}/>
    </div>)

  }
}

export default Parent1;
