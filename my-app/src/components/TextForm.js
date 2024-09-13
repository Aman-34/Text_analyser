import React, {useState} from 'react'
export default function TextForm(props) {
  const handleUpClick=()=>{
    console.log("Uppercase was Clicked"+ text)
    let newText = text.toUpperCase();
    setText(newText)
    
  }
  const handleLoClick=()=>{
    console.log("Lowercase was Clicked"+ text)
    let newText = text.toLowerCase();
    setText(newText)
    
  }
  const handleOnClear =()=>{
    console.log("Clear was Clicked"+ text)
    let newText = ""
    setText(newText)
    
  }
  const handleOnRemove =()=>{
    console.log("Remove was Clicked"+ text)
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    
  }
  const handleOnCopy =()=>{
    var text=document.getElementById("btn btn-info")
    text.select()
    navigator.clipboard.writeText(text.value)
    
  }



  const handleOnChange=(event)=>{
    console.log("On Change was Clicked")
    setText(event.target.value);
  }


  const [text, setText] = useState('');
  return (
    <>
    <h1>{props.heading} </h1>
<div className="mb-3">
    <label for="My Box" className="form-label">Example textarea</label>
    <textarea className="form-control" value={text} onChange={handleOnChange} id="My Box" rows="8"></textarea>
</div>
<div>
 <button type="button" class="btn btn-primary mx-1"  onClick={handleUpClick}>Convert To Uppercase</button>
 <button type="button" class="btn btn-primary mx-1"  onClick={handleLoClick}>Convert To Lowercase</button>
 <button type="button" class="btn btn-primary mx-1"  onClick={handleOnClear}>Clear</button>
 <button type="button" class="btn btn-primary mx-1"  onClick={handleOnRemove}>Remove space</button>
 <button type="button" class="btn btn-info" onClick={handleOnCopy}>Copy</button>

</div>
<div>
<label for="customRange1" class="form-label">Example range</label>
<input type="range" class="form-range" id="customRange1"/>
</div>
<div>
  <h2> Text Summary</h2>
  <p>{text.split(" ").length} Words and {text.length} Character</p>
  <p>{0.008*text.split(" ").length} Minutes read</p>
  <h2> Preview</h2>
  <p>{text}</p>

</div>
 
    </>
  ) 
}

