import React, { Children } from 'react'

const PracticeFun1 = (props)=>{
    return(
        <div>
            <h1>Hello, {props.name}</h1>
            {props.children}
        </div>
    )
}

export default PracticeFun1;
