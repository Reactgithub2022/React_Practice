import React, {Component} from 'react'

class CounterPractice extends Component{
    constructor(props){
        super(props)

        this.state = {
            count: 0
        }
    }

    onIncrement = ()=>{
        this.setState((prevState,props) =>{
            return{
                count:prevState.count+1
            }
        })
    }

    onDecrement = ()=>{
        const {count} = this.state
        this.setState(prevState =>{

            if(count>0){
            return{
                count:prevState.count-1           
            }
        }
        })
    }

    incrementThree =() =>{
        this.onIncrement()
        this.onIncrement()
       
    }

render(){
    const {count} = this.state
    return(
        <div>
            <h1>Count -- {count}</h1>
            <button onClick={this.incrementThree}>Increment</button>
            <button onClick={this.onDecrement}>Decrement</button>
        </div>
    )
}

}

export default CounterPractice