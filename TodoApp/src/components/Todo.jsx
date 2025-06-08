import { useState } from "react";
 
import Form from "./Form";
import TodoList from "./TodoList";

export default function Todo(){
   const[task,setTask]=useState([]);
    return(

        <div>
           <Form task={task} setTask={setTask}/>
          <TodoList task={task} setTask={setTask}/>
        </div>
    );
}