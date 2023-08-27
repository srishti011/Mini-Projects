import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" +  text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!!", "success");
    }

    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked" +  text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!!", "success");
    }

    const handleOnChange = (event)=>{
        // console.log("On change")
        setText(event.target.value)
    }

    const handleCopy = () =>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!!", "success");
    }

    const handleClearClick = () =>{
        let newText = '';
        setText(newText)
        props.showAlert("Text cleared!!", "success");
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed extra spaces!!", "success");
    }

    const [text, setText] = useState('');
    // setText("new text")
    return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3" >
        <textarea className="form-control" value={text}
         style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}}
         onChange={handleOnChange} id="myBox" rows="5" placeholder='Enter text here'></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-4" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h3>Your text summary</h3>
        <p>{text.split(/\s+/).filter((element)=>{
            return element.length!==0
        }).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{
            return element.length!==0
        }).length} minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div> 
    </>
  )
}

