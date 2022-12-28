import React from 'react'

function Alert(props) {
  const capitalize = (word)=>{
    const lower =  word.toLowerCase();
    
      var words = lower.split(' ');
      var CapitalizedWords = [];
      words.forEach(element => {
      if(element!=='')
        CapitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length));
      });
    return  CapitalizedWords.join(' ');
    
  }
  return (
    props.alert && 
    <div className={"alert alert-${props.alert.type} alert-dismissible fade show"}  style={{ color:props.mode==="dark"?"white": "#042743"}} role="alert">
      <strong>{capitalize(props.alert.msg)}</strong>: {capitalize(props.alert.type)}
    </div>
  )
}

export default Alert
