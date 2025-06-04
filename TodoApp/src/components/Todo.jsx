import { useState } from "react";
import Todoitem from "./Todoitem";

export default function Todo(){

    const [todo, setTodo]= useState("");
    const[task,setTask]=useState([]);
    function handleSubmit(e){
        e.preventDefault();
        //...is a spread operator
        setTask([...task,todo]);
        setTodo("")

     
    }

    return(

        <div>
           
           <form onSubmit={handleSubmit}>
        <input onChange={(e)=>setTodo(e.target.value)} type="text" value={todo} />

        <button type="submit"> Add Task</button>
           </form>
           
           { task.map((item)=>(

          <Todoitem key={item} item={item}/>
           
           ))}

        </div>
    );
}