import { useState } from "react";
 
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo(){
   const[task,setTask]=useState([]);
   const completedtodos= task.filter((todo)=>todo.done).length
 const totalTodos= task.length;
    return(

        <div>
           <Form task={task} setTask={setTask}/>
          <TodoList task={task} setTask={setTask}/>

         <Footer completedtodos={completedtodos} totalTodos={totalTodos }/>
        </div>
    );
}