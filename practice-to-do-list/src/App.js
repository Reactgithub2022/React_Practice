import React,{ Component } from 'react';


import './App.css';
import ChildComponent from './Component/ChildComponent';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      name: "hey123",
      age: "30",
      occupation: "designer"
    }
  }
  

  render(){
return (
    
    <div className="App">
      <p>2. Pass data using state</p>
        <hr />
      <ChildComponent name={this.state.name}
          age={this.state.age}
          occupation={this.state.occupation}/>
    </div>
  
  )
}
}

export default App;
