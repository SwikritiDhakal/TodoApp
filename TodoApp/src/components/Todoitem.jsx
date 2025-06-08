import styles from "./todoitem.module.css"
export default function Todoitem({item, task , setTask}){
function handleDelete(item){
console.log("delete clicked for item",item);

setTask(task.filter((todo)=>todo!==item));
}

function handleClick(name){

setTask(task.map((todo)=>todo.name=== name ? {...todo,done:!todo.done  }: todo));


}
const className= item.done? styles.completed: "";
    return  (
    <div className={styles.item}>

            <div className={styles.itemname}>
                <span className={className}  onClick={()=>handleClick(item.name)}>
        {item.name}
        </span>
         <span>
            <button onClick={()=>handleDelete(item)} className={styles.deletebutton}>x</button>
        </span>
        </div>
       

        <hr className={styles.line} />

        </div>
        
    );


    


}