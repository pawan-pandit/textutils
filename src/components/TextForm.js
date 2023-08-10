import React, { useState } from "react";

export default function TextForm(props) {
  const handleupClick = () => {
    console.log("Upper case was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted into Uppercase", "success")
 };

  const handleLoClick = () => {
    console.log("Lower case was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted into Lowercase", "success")
  };


  const handleOnChange = (event) => {
    console.log("on change ");
    setText(event.target.value);
    
  };

  const handleClearClick = ()=>{
    let newText='';
    setText(newText);
    props.showAlert("Text Cleared", "success")
  };

  const handleExtraSpaces=()=>{
  let newText =text.split(/[ ]+/);
   setText(newText.join(" "))
   props.showAlert("Successfully  Removed Extra Spaces", "success")
  }

  const [text, setText] = useState('');

  return (
    <>
      <div className="container" style={{ color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white',color: props.mode==='dark'?'white':'black'}} id="myText"  rows="8" ></textarea>
        </div>

        <button className="btn btn-primary mx-1 my-1" onClick={handleupClick}>
          Convert to Uppercase
        </button>

        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>

        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3" style={{ color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>
          {" "}
          {text.split(/\s+/).length} words and {text.length} characters  
          {/* regular exprestion use \s measn whte space and + mean ek s jada*/}
        </p>
        <p>{0.008 * text.split(" ").length} Time to read in mintues</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in the  Text-Box Above to Preview it Here"}</p>
      </div>
    </>
  );
}
