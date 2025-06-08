import styles from "./todolist.module.css";
import Todoitem from "./Todoitem";
export default function TodoList({task, setTask}){

    //slice creates duplicate 
    const sortedtodos= task.slice().sort((a,b)=>Number(a.done)-Number(b.done))

    return(
        <div className={styles.list}>
             { sortedtodos.map((item)=>(

          <Todoitem key={item.name}
           item={item}
           task={task}
            setTask={setTask}/>
           
           ))}
        </div>
    )
}