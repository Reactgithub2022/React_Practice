import React,{Component} from 'react'

class Sample2 extends Component{


state = {
    count:0
}


onIncrement = () =>{
    this.setState((prevState) =>({
        count:prevState.count+1
    }))
}

onDecrement = ()=>{
     const {count} = this.state
    this.setState(prevState =>{
        if(count>0){
            return {
                count:prevState.count-1
            }
        }
    })
}

render(){
    const {count} = this.state
    return(
        <div>
            <h1>Count : {count}</h1>
            <button onClick={this.onIncrement}>Increment</button>
            <button onClick={this.onDecrement}>Increment</button>
        </div>
    )
}
}
export default Sample2