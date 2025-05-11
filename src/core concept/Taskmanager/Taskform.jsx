import { useState } from "react";



export default function TaskForm ({addTask}){
    const [value,setvalue] = useState("");
        const handle = (event)=>{
        event.preventDefault();
        // prevent the input as a spaces
        if (value.trim()) {
           // console.log('Submitted',value)
            //add task
            addTask(value);
            // refresh the txt box
            setvalue("")
        }
       
    }
    return <>
    <form action="" onSubmit={handle}>
        <div className="task-action">
        <input type="text" 
        onChange={(event)=> setvalue(event.target.value)}
        // refresh the tctbx
        value={value}
         placeholder="Add task" className="form-txt"/> 
        <input type="submit" value="Add"  className="form-add-btn"/>
        </div>
    </form>
   
    </>
     
}
