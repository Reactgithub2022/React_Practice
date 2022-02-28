import React, { Component} from 'react';
import MemoComp from './MemoComp';
import PureComponents from './PureComponents';
import RegularComponents from './RegularComponents';

class ParentComponents extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:'Eswar'
      }
}
    
componentDidMount() {
          setInterval(()=>{
              this.setState({
                  name: 'Eswar'
              })
          }, 2000)
}

  render() {
      console.log('******Parent Component**********')
    return (
        <div>
            ParentComponents
            <MemoComp name = {this.state.name}/>
            {/* <RegularComponents name={this.state.name}/>
            <PureComponents name={this.state.name}/> */}
        </div>
    )
  }
}

export default ParentComponents;
