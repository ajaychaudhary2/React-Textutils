import React, { useState } from 'react'



// import PropTypes from 'prop-types'

export default function Text(props) {
    
const HandleOnClick =()=>{
console.log(
    "uppercase has clicked"
);
let newText=text.toLocaleUpperCase();
settext(newText)
props.showalert("Uppercase was done", "Succes")
};


const HandleLoClick =()=>{
    console.log(
        "lowercase has clicked"
    );
    let newText=text.toLocaleLowerCase();
    settext
    (newText)
    props.showalert("Lowecase was done", "Succes")
    };
const HandleClClick =()=>{
  
    let newText=('');
    settext
    (newText)
    props.showalert("Text cleared", "Succes")
    };

    const firLetterUp = () => {
        let newText = text.split(" ");
        let finalArr = []
        newText.forEach((element) => {
          let afterUp = element[0].toUpperCase();
          afterUp = afterUp.concat(element.substring(1))
          finalArr.push(afterUp);
        })
        settext(finalArr.join(" "));
        props.showalert("Capatilized was done", "Succes")
      }

      const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showalert("Copied to clipboard ", "Succes")
      }

const HandleOnChange =(event)=>{
settext(event.target.value)
};


    const [text, settext] = useState('');
    return (
        <>
        <div className="container">

            <h1  style ={{ color: props.mode=== 'light' ? 'black': 'white'}}>{props.Heading}</h1>
            <div className="mb-3"  >

                <textarea className="form-control" id="mybox" rows="10" value={text} onChange={HandleOnChange}  
                style ={{ backgroundColor: props.mode=== 'light' ? 'white': 'black',
                color: props.mode=== 'light' ? 'black': 'white'
                }}></textarea>
            </div>
         
            <button  disabled={text.length===0}   className="btn btn-primary mx-2 my-1" type="submit" onClick={HandleOnClick} style ={{ color: props.mode=== 'light' ? 'white': 'black' , backgroundColor: props.mode=== 'light' ? '': 'white'}}>Convert To UpperCase</button>
            <button  disabled={text.length===0}   className="btn btn-primary mx-2 my-1" type="submit" onClick={HandleLoClick} id="btn2"  style ={{ color: props.mode=== 'light' ? 'white': 'black' , backgroundColor: props.mode=== 'light' ? '': 'white'}}>Convert To Lowercase</button>
            <button disabled={text.length===0}    className="btn btn-primary mx-2 my-1" type="submit" onClick={HandleClClick} style ={{ color: props.mode=== 'light' ? 'white': 'black' , backgroundColor: props.mode=== 'light' ? '': 'white'}}>Clear all</button>
            <button  disabled={text.length===0}   className="btn btn-primary mx-2 my-1" type="submit" onClick={firLetterUp} style ={{ color: props.mode=== 'light' ? 'white': 'black' , backgroundColor: props.mode=== 'light' ? '': 'white'}}> Capatilized </button>
            <button  disabled={text.length===0}   className="btn btn-primary mx-2 my-1" type="submit" onClick={handleCopy}style ={{ color: props.mode=== 'light' ? 'white': 'black' , backgroundColor: props.mode=== 'light' ? '': 'white'}}> Copy all </button>

        </div>
        
        <div className="container my-3"  style ={{ color: props.mode=== 'light' ? 'black': 'white'}}>
            <h1>Your Text Summary</h1>
          <p>{text.split(' ').filter((element)=>{ return element.length!==0}).length} Words and {text.length} Character</p>
          <p>
            {0.008*text.split(' ').filter((element)=>{ return element.length!==0}).length} Time taken to read this
          </p>

          <h2>Preview</h2> 
          <p>{text.length>0?text:"Nothing To Preview"}</p>
        </div>
                
        
        </>
    )
}
// Text.propTypes = { 
//     Heading:PropTypes.string.isRequired};
