import React, { Component } from 'react';

import userProfile from './userProfile';

const persons= [
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
class ListPractice extends Component {

state = {
    searchInput:"",
    namesList:persons
}

onChangeSearchInput = event =>{
    this.setState({
        searchInput:event.target.value
    })
}

deleteUser = id =>{
    const {namesList} = this.state
    const filteredNamesData = namesList.filter(
        each => each.id !== id
    )
    this.setState({
        namesList:filteredNamesData
    })
}

  render() {
      const{searchInput,namesList}= this.state
      const searchResults = namesList.filter(
          eachUser => eachUser.name.includes(searchInput)
      )


    return (<div>
        <h1>UserList</h1>
        <input type="search"
        onChange = {this.onChangeSearchInput}
        value = {searchInput}>
        </input>
        <ul>
            {
                searchResults.map(eachUser =>(
                    <userProfle
                    userDetails = {eachUser}
                    key ={eachUser.id}
                    deleteUser = {this.deleteUser}
                    />
                ))}
                </ul>
                </div>
    )
        
  }
}

export default ListPractice;
