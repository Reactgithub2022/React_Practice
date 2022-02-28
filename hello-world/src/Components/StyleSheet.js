import React from 'react';
import './myStyles.css'

function StyleSheet(props) {
    let className1 = props.primary? 'primary': ''
  return(
<div>
    <h1 className={`${className1} font-xl `}>Stylesheets</h1>
</div>
  ) 
}

export default StyleSheet;

