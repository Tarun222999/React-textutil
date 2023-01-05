import React, { useState } from 'react'

export default function TextForm(props) {
    //state variable
    function ReverseString(str) {
        return str.split('').reverse().join('')
        }

    const [text,setText]=useState('');
    // text="setting test by changing a variable"; //wrong way
    // setText("new text");
    const handleUpClick=()=>{
    //    setText("you have clicked on handleUPCLICK");
        let upperText=text.toUpperCase();
        setText(upperText);
    //    console.log("button was clicked");
    }
    const handleLowClick=()=>{
        //    setText("you have clicked on handleUPCLICK");
            let upperText=text.toLowerCase();
            setText(upperText);
        //    console.log("button was clicked");
        }
    const handleOnChange=(event)=>{
        // console.log("on change")
       
        setText(event.target.value);
    }
    const handleRevClick=()=>{
        setText(ReverseString(text));
    }
    const handleCpyClick=()=>{
        var copyText = document.getElementById("myBox");

        // Select the text field
        copyText.select();
        
      
         // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);
      
    }
  return (
    <>
    <div className='container' style={{color:props.mode=== 'dark'?'white':'black'}}> 
        <h1>{props.heading}</h1>
  
        <div className="mb-3">

        <textarea className="form-control" id="myBox"  onChange={handleOnChange} value={text} style={{backgroundColor:props.mode=== 'dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} rows="5"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to LowererCase</button>
        <button className="btn btn-primary mx-1" onClick={handleRevClick}>Reverse the text</button>
        <button className="btn btn-primary" onClick={handleCpyClick}>Copy the text</button>

    </div>
    <div className="container mb-3">
        <h1>your text summary</h1>
        <p>{text.split(" ").length-1} words and {text.length} characters</p>
        <p>{0.008 *text.split(" ").length} minutes read</p>

    </div>
    </>
  );
}
