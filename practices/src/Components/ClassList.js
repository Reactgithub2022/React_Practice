import React from 'react';

import './Classlist.css'

function ClassList() {
    const names= [
        {
            id:1,
            name:'bala',
            role:'software'
        },
        {
            id:2,
            name:'Sundar',
            role:'software'
        },
        {
            id:3,
            name:'eswar',
            role:'software'
        },
        {
            id:4,
            name:'jonnalagadda',
            role:'software'
        },
        ]
  return (
  
  <div>
      {
      names.map(name =>
        
        <>
        <div className='direc'>
      <h2>{name.name}</h2>
      <p>{name.role}</p>
      </div>
      
      </>
      )
}
  </div>
      
  )
}

export default ClassList;
