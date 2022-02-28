import React,{Component} from 'react'

class Welcome extends Component {
   
    render (){
        const {name, heroName} = this.props
        // const {state1, state2} = this.state (for state we can de-structure in this way)
        return <h1>Welcome {name} a.k.a {heroName}</h1>

    }
};

export default Welcome;