import React, { Component } from 'react';

export class EventBind extends Component {

constructor(props) {
  super(props)

  this.state = {
     message: "Hello"
    
  }

//this.onClickChange = this.onClickChange.bind(this)

}

onClickChange = ()=>{
    this.setState({
        message:"Good News"
    }) 
    }

   //onClickChange() {
    //this.setState({
        //message:"Good News"
    //}) 
    //console.log(this)
    //}

  render() {
    return <div>
        <div>{this.state.message}</div>
        {/*<button onClick={this.onClickChange.bind(this)}>Click</button>*/}
        <button onClick={this.onClickChange}>Click</button>
    </div>;
  }
}

export default EventBind;
