import React from 'react';

function Child1(props) {
  return(
  
  <div>
      <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
  </div>)
  
  
}

export default Child1;
