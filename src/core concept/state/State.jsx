import { useState } from "react"

export default function State (){
    const [count,setcount] = useState(0);
    const click = () =>{
        setcount (count+1)
    }
   return<>
   <h1>Hello world</h1>
    <h2>increment {count}</h2>
    <button onClick={click} className="bg-color">Click</button>
   </> 
}