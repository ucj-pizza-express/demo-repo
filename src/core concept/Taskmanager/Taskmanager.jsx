import { useState } from "react"
import TaskForm from "./Taskform"
import './task.css'
import TaskList from "./Tasklist";

export default function Taskmanager(){
  const [task,settask] = useState([]);

 const addTask = (text) => {
const newTask = {id:Date.now(),text,completed:false};
settask([...task,newTask])
}
// for added task completed function
const toggleTask = (id)=> {
    settask(task.map((t)=>{
        // condition{true}:false
       return t.id == id ? {...t,completed:!t.completed}: t
    }))
}
// delete function
const deleteTask = (id) =>{
const filteredTask = task.filter((t) =>{
     return t ['id'] !== id });
     settask(filteredTask);
}
    return <div>
        <h1>Task Manager</h1>
        <TaskForm  addTask={addTask}/>
       <TaskList task={task} toggleTask ={toggleTask} deleteTask={deleteTask} />
         Task: {task.length} 
    </div>
}
