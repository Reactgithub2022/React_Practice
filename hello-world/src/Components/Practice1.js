import React,{Component} from 'react'

class Practice1 extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         name:'eswar'
      }
    }

   clickHandle = ()=>{
       this.setState({
           name:'Eswar Jonnalagadda'
       })
   } 
    
render(){
    const{name} = this.state
    const {age,surname} = this.props
    return(
        <div>
            <h1>{name} his age is {age} and surname is {surname}</h1>
            {this.props.children}
            <button onClick={this.clickHandle}>Click Me</button>
        </div>
    )

}
}

export default Practice1