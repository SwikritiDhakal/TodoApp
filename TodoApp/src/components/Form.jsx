import styles from "./form.module.css"; 
 import { useState } from "react";
export default function Form({task, setTask}){
  
    const [todo, setTodo]= useState("");
    
 
function handleSubmit(e){
        e.preventDefault();
        //...is a spread operator
        setTask([...task,todo]);
        setTodo("")
     
    }

    return(
           
<form className={styles.todoform} onSubmit={handleSubmit}>
        <input className={styles.inputform
         } placeholder="Enter your task" onChange={(e)=>setTodo(e.target.value)} type="text" value={todo} />

        <button className={styles.buttonform} type="submit"> Add Task</button>
           </form>
           
    );
}