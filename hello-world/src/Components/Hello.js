import React from 'react'

const Hello = ()=>{
   /* return(
        <div>
            <h1>Hello World</h1>
        </div>
    )*/
    return React.createElement('div',
    {className:'dummy'}, 
    React.createElement('h1',null,'Hello Bala'))
}

export default Hello