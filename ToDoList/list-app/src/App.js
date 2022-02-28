import React,{Component} from 'react'

import ListItem from './ListItem';

import './App.css';

import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

class App extends Component {
constructor(props){
  super(props)
  this.state ={
    items:[],
    currentItem:{
      text:'',
      key:''
    }
  }
}

handleInput = (event)=>{
  this.setState({
    currentItem:{
      text:event.target.value,
      key:Date.now()
    }
  })
}

addItem = (event)=>{
  event.preventDefault();
  const newItem = this.state.currentItem;
  console.log(newItem);
  if(newItem.text!==""){
    const newItems=[...this.state.items, newItem];
    this.setState({
      items:newItems,
      currentItem:{
        text:'',
        key:''
      }
    })
  }
}
  
deleteItem = (key)=>{
  const filteredItems = this.state.items.filter(item =>
  item.key !== key);
  this.setState({
    items:filteredItems
  })
}

  render(){
    const{currentItem} = this.state
    return (
      <div className="app">
     <header>
       <form id="todo" onSubmit={this.addItem}>
         <h1>TO Do List</h1>
         <input type="text" placeholder = "Enter Text"
         value={currentItem.text}
         onChange={this.handleInput}/>
          <button type="submit">Add</button>
       </form>
      </header>
      <ListItem items = {this.state.items}
      deleteItem = {this.deleteItem}/>
      </div>
    )
  }
  
}

export default App;
