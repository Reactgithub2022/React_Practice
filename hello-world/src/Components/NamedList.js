import React from 'react';
import Person from './Person';

function NamedList({person}) {
    const persons = [
        {
            id:1,
            name:'Eswar',
            age: 31,
            skill: 'React'
        },
        {
            id:2,
            name:'krishna',
            age: 35,
            skill: 'Java'
        },
        {
            id:3,
            name:'Sreeram',
            age: 37,
            skill: 'Oracle'
        },
        {
            id:4,
            name:'bala',
            age: 31,
            skill: 'testing'
        }
    ]
    const personList = persons.map(person => 
        <Person key ={person.id} person = {person}/>)

    
  return <div>
      {
          personList
          //names.map(Item => <h2>{Item}</h2>)
      }
  </div>
  

}

export default NamedList;
