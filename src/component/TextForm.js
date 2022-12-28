import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=> {
    console.log("Uppercase was clicked "+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase","success")
  }
  function handleLoClick() {
    console.log("Lowercase was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase","success")
  }
  function handleClClick() {
    console.log("Clear was clicked");
    let newText = "";
    setText(newText);
    props.showAlert("text is cleared","success")
  }
  function handleFCClick ()  {
    console.log("Capitalized Text was clicked " + text);
    var words = text.split(' ');
    var CapitalizedWords = [];
    words.forEach(element => {
    if(element!=='')
      CapitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length));
    });
    setText(CapitalizedWords.join(' '));
    props.showAlert("converted to capitalized","success")
  }

  const handleOnChange = (event)=>{
    console.log("On change");
    setText(event.target.value)
  }

  const[text,setText] = useState('');
  
  return (
   <>
   <div className="container" style={{color:props.mode==="dark"?"white": "#042743"}}>

      <h1>{props.heading}</h1>
      <div className="mb-3">

      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="light"?"white": "#042743",color: props.mode==='dark'?'white':'black'}} id="myBox" rows="10" ></textarea>
    </div>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClClick}>Clear Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleFCClick}>Capitalized Text </button>
    
  
    </div>
    <div className="container my-3" style={{color:props.mode==="dark"?"white": "#042743" }}>
      <h2>Your text Summary</h2>
      {<p>{text===""? 0:text.split(" ").length} words and {text.length} characters </p>}
      <p> {text===""? 0:0.008 *text.split(" ").length } Minutes taken to read </p>
      <h2> Preview</h2>
      <p> {text.length>0 ?text:"Enter something in the text to preview it here " }</p>
    </div>
    </>
  )
}
