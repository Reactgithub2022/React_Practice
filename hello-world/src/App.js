
import './App.css';
import Greet1 from './Components/Greet'
import Welcome from './Components/Welcome';
import Hello from './Components/Hello'
import { Component, Fragment } from 'react';
import Message from './Components/Message';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import UserGreeting from './Components/UserGreeting';
import NamedList from './Components/NamedList';
import StyleSheet from './Components/StyleSheet';
import Inline from './Components/Inline';
//import './appStyles.css'
//import styles from '.src/appStyles.module.css'
import Form from './Components/Form';
import LifecycleA from './Components/LifecycleA';
import FragmentDemo from './Components/FragmentDemo';
import ParentComponents from './Components/ParentComponents';
import Practice1 from './Components/Practice1';
import PracticeFun1 from './Components/PracticeFun1';
import CounterPractice from './Components/CounterPractice';
import Parent1 from './Components/Parent1';
import Sample1 from './Components/Sample1';
import Sample2 from './Components/Sample2';
import DidUpdate from './Components/DidUpdate';


class App extends Component {
  render(){
  return (
    <div className="App">
      {/* <Parent1/> */}
      {/* <Sample1/> */}
      {/* <Sample2/> */}
      {/* <DidUpdate/> */}
    {/* <CounterPractice /> */}
      {/* <Practice1  age = '23' surname = 'jonnalagadda'> <p>this is my full name</p></Practice1>
      <PracticeFun1 name = 'eswar jonnalagadda'> <p>children para</p>
      </PracticeFun1> */}
      {/* <ParentComponents /> */}
      {/* <FragmentDemo /> */}
      {/* <LifecycleA/> */}
      {/* <Form /> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className='success'>Error</h1> */}
      {/* <Inline/> */}
      {/* <StyleSheet primary = {false}/> */}
      {/* <NamedList/> */}
      {/* <UserGreeting/> */}
      {/*<ParentComponent />*/}
      {/*<EventBind/>*/}
      {/*<FunctionClick />
      <ClassClick />*/}
      <Counter />
      {/*<Message/>*/}
      
      {/* <Greet1 name="Bala" heroName ="Super1">
        <p>This is para</p>
      </Greet1>
      <Greet1 name="Krishna" heroName ="Super2">
        <button>Action</button>
      </Greet1>*/}
      {/*<Greet1 name="Sreeram" heroName ="Super5"/>
      <Welcome name="Bala" heroName ="Super1"/>
      <Welcome name="krishna" heroName ="Super2"/>
      <Welcome name="Sreeram" heroName ="Super3"/>
  <Hello/> */}
    </div>
  );
}
}

export default App;
