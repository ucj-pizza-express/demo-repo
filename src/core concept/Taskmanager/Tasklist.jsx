export default function TaskList({ task,toggleTask,deleteTask }) {
    return (
      <ul className="task-list-ul">
        {task.map((t,index) => (
          <li id="task-list-li"key={index}  >
             <span className= {t['completed']== true && 'completed'} onClick={() => toggleTask(t ['id'])} >{t['text']} </span> 
            <span onClick={() => deleteTask(t['id'])} className="delete">x</span>
            </li>
        ))}
      </ul>
    );
  }
  