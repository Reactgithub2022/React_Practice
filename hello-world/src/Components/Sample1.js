import React,{Component} from 'react'

class Sample1 extends Component{
    constructor(props){
        super(props)

        this.state = {
            name:'Eswar'
        }

    }

    clickHandle = () => {
        this.setState({
            name:'Eswar Jonnalagadda'
        })
    }
    render(){
        const {name} = this.state
        return(
            <div>
                <h1>{name}</h1>
            <button onClick={this.clickHandle}>Click Me</button>
            </div>
        )
    }
}

export default Sample1