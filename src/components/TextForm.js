import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handelUpCase = () => {
        // console.log("You Have Clicked");
        let newText= text.toUpperCase();
        setText(newText);
        if(text!==""){
            props.showAlert("Changed to Uppercase", "success");
        }
        else{
            props.showAlert("Enter Some Text", "warning");
        }
    }
    const handelLoCase = () => {
        // console.log("You Have Clicked");
        let newText= text.toLowerCase();
        setText(newText);
        if(text!==""){
            props.showAlert("Changed to Lowercase", "success");
        }
        else{
            props.showAlert("Enter Some Text", "warning");
        }
    }
    const handelClear = () => {
        // console.log("You Have Clicked");
        let newText= '';
        setText(newText);
        if(text!==""){
            props.showAlert("Cleared", "success");
        }
        else{
            props.showAlert("Enter Some Text", "warning");
        }
    }
    const handelExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        if(text!==""){
            props.showAlert("Removed extra spaces", "success");
        }
        else{
            props.showAlert("Enter Some Text", "warning");
        }
    }
    const handelCopy = () =>{
        navigator.clipboard.writeText(text);
        if(text!==""){
            props.showAlert("Copied to clipboard", "success");
        }
        else{
            props.showAlert("Enter Some Text", "warning");
        }
    }
    const handelCapitals =()=>{
        let arr=text.split(" ");
        for (let i=0; i<arr.length; i++){
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        let newText =  arr.join(" ");
        setText(newText);
        if(text!==""){
            props.showAlert("All first letter is Capitalized", "success");
        }
        else{
            props.showAlert("Enter Some Text", "warning");
        }
    }
    const handelOnChange = (event) =>{
        // console.log("On Change");
        setText(event.target.value);
    }
    
  return (
      <>
    <div className='container' style={{color: props.mode==="dark"?"white":"black"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" value={text} onChange={handelOnChange} style={{backgroundColor: props.mode==="dark"?"black":"white", color: props.mode==="dark"?"white":"black"}}rows="8" placeholder='Write Here'></textarea>
            <button className="btn btn-primary my-3 mx-1 my-1" onClick={handelUpCase} >Convert to Uppercase</button>
            <button className="btn btn-primary my-3 mx-1 my-1" onClick={handelLoCase} >Convert to Lowercase</button>
            <button className="btn btn-primary my-3 mx-1 my-1" onClick={handelExtraSpaces} >Remove Extra Spaces</button>
            <button className="btn btn-primary my-3 mx-1 my-1" onClick={handelCapitals} >First letter to Upper Case</button>
            <button className="btn btn-primary my-3 mx-1 my-1" onClick={handelCopy} >Copy Text</button>
            <button className="btn btn-primary my-3 mx-1 my-1" onClick={handelClear} >Clear Text</button>
        </div>
    </div>

    <div className="container" style={{color: props.mode==="dark"?"white":"black"}}>
        <h2>Text Summary</h2>
        <strong>Number of Words:</strong> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} <br/>
        <strong>Number of Characters:</strong> {text.length} <br/>
        <strong>Time to Read:</strong> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length * 0.008} Minutes
    </div>

    <div className="container my-3" style={{color: props.mode==="dark"?"white":"black"}}>
        <h2>Prewiew</h2>
        {text.length>0?text:"Write on the above field to display content here."}
    </div>
    </>
  )
}
