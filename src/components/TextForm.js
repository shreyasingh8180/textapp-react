import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        //console.log("Uppercase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","success");
    }

    const handleLoClick=()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success");
    }

    const handleClearClick=()=>{
        let newText = "";
        setText(newText)
        props.showAlert("Text Cleared","success");
    }

    /*const speak=()=>{
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }*/

    const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        const toogle = document.getElementById('toggle')
        if (toogle.textContent === "Speak") {
            toogle.innerHTML = "Stop"
        }
        else {
            toogle.innerHTML = "Speak"
            if (toogle.innerHTML === "Speak"){
                window.speechSynthesis.cancel()
            }
        }
    }

    const handleCopy = () => {
        var text= document.getElementById('myBox');
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard","success");
    }

    const handleExtraSpaces = () =>{
        let newtext= text.split(/[ ]+/);
        setText(newtext.join[" "]); 
        props.showAlert("Extra spaces removed ","success");
    }

    const handleOnChange=(event)=>{
        //console.log("On Change");
        setText(event.target.value);
    }

    

    const[text, setText]= useState("Enter text here");
    //text="new text";//wrong way to change the state
    //setText("new text");//Correct way to change the state 
  
    return (
    <>
    <div className="container" style={{ color: +(props.mode=== 'dark'?'white':'#042743') }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode=== 'dark'?'grey':'white', color: +(props.mode === 'dark'?'white':'#042743')  }} id="myBox" rows="8"></textarea>
        
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        {/*<button className="btn btn-warning mx-1 my-1" type="submit" onClick={speak} >Speak</button>*/}
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy} >Copy</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces} >Remove Extra Space</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
        <button className="btn btn-warning mx-1 my-1" type="submit" onClick={speak} id="toggle" >Speak</button>
    </div>

    <div className="container my-3" style={{color: +( props.mode=== 'dark'?'white':'#042743') }}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length } Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it"}</p>
    </div>
    </>
  )
}
