import styles from "./form.module.css"; 
 import { useState } from "react";
export default function Form({task, setTask}){
  
   // const [todo, setTodo]= useState("");
    const [todo, setTodo]= useState({name:"", done:false});

    
 
function handleSubmit(e){
        e.preventDefault();
        //...is a spread operator
        setTask([...task,todo]);
        setTodo({name:"", done:false})
     
    }

    return(
           
<form className={styles.todoform} onSubmit={handleSubmit}>
        <input className={styles.inputform
         } placeholder="Enter your task..." 
         onChange={(e)=>setTodo({name:e.target.value, done:false})} type="text" value={todo.name} />

        <button className={styles.buttonform} type="submit"> Add Task</button>
           </form>
           
    );
}