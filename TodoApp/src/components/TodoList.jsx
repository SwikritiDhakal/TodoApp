import styles from "./todolist.module.css";
import Todoitem from "./Todoitem";
export default function TodoList({task, setTask}){
    return(
        <div className={styles.list}>
             { task.map((item)=>(

          <Todoitem key={item}
           item={item}
           task={task}
            setTask={setTask}/>
           
           ))}
        </div>
    )
}