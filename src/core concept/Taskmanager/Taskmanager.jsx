import { useState } from "react"
import TaskForm from "./Taskform"
import './task.css'

export default function Taskmanager(){
    const [task,settask] = useState([]);

    return <div>
        <h1>Task Manager</h1>
        <TaskForm/>
         Task: {task.length} 
    </div>
}
