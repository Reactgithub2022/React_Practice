import React from 'react';

function MemoComp(props) {
    console.log('Rendering Memo Comp')
    const {name}=props;
    
  return(
    <div>{name}</div>
  ) 
}

export default React.memo(MemoComp);
