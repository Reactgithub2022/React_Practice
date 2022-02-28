import React, { Component } from 'react';

class UserGreeting extends Component {

constructor(props) {
  super(props)

  this.state = {
     isLoggedIn: true
  }
}


  render() {

    return (
        //Logical && Operator (most we use this also)
    <div>
        {this.state.isLoggedIn && <div><h1>Welcome Eswar</h1>
        <p>Sundar</p></div>}
        {!this.state.isLoggedIn && <div>Welcome Guest</div>}
    </div>
    )
//return(
//Ternary Conditional Operator approach (most of the times we use this)
//     this.state.isLoggedIn?
//     <div>Welcome Eswar</div>:
//     <div>Welcome Guest</div>
// //)

    //Element Varaible Approach
//     let message 
//     if(this.state.isLoggedIn){
//         message = <div>Welcome Eswar</div>
//     }else{
//         message = <div>Welcome Guest</div>
//     }
// return <div>{message}</div>


    //If else statemnet Approah
    //   if (this.state.isLoggedIn){
    //       return (
    //         <div>Welcome Eswar</div>
    //       )
    //   }else {
    //     return (
    //         <div>Welcome Guest</div>
    //       )
    //   }
    // return(
    //     <div>
    //     <div>Welcome Eswar</div>
    //     <div>Welcome Guest</div>
    // </div>
    // ) 
  }
}

export default UserGreeting;
