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
           
<form onSubmit={handleSubmit}>
        <input onChange={(e)=>setTodo(e.target.value)} type="text" value={todo} />

        <button type="submit"> Add Task</button>
           </form>
           
    );
}