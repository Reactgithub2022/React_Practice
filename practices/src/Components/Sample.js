import React, { Component } from 'react';
import './Sample.css'

const names= [
    {
        id:1,
        name:'Sree',
        role:'software'
    },
    {
        id:2,
        name:'krishna',
        role:'software'
    },
    {
        id:3,
        name:'maruthi',
        role:'software'
    },
    {
        id:4,
        name:'jonnalagadda',
        role:'software'
    },
    ]

class Sample extends Component {


state = {
     username:'',
     topic:'java',
     
  }

onChangeUsername = event =>{
    this.setState({
        username:event.target.value
    })
}

onChangeSelect =event=>{
    this.setState({
        topic:event.target.value
    })
}

onChangeSubmit = event =>{
    alert(`Login ${this.state.username}`)
    event.preventDefault()
}




render(){
      const{username,topic} = this.state
      const {names} = this.state
    return (
    <div className='bg-container'>

<form onSubmit= {this.onChangeSubmit}>
    
    <label className='labels'>Username</label>
    
    
    <input type='text' placeholder='Username' onChange={this.onChangeUsername} value ={username}>
    
    </input>

    <div>
    <label className='label-toic'>Topic</label>
    <select onChange = {this.onChangeSelect} value ={topic}>
        <option value ="react">React</option>
        <option value ="node">Node</option>
        <option value ="express">Express</option>
        <option value ="python">Python</option>
        <option value ="java">Java</option>
    </select>
    
    </div>
    <div>
    <button type = 'submit' className='button1'> submit </button>
    </div>
</form>

        

    </div>
    )
  }
    
}

export default Sample;
