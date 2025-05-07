import { useState } from "react";
export default function EventHandle (){
    const [sampletext,settext] = useState('');
    const handlefunction = (abc) => {
        
        settext(abc.target.value)
    }
return <>
<h1>Event handling Example</h1>
<input type="text" name="" onChange={handlefunction}  placeholder="Type here"/>
<p>{sampletext}</p>
</>
}