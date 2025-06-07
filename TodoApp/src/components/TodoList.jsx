import Todoitem from "./Todoitem";
export default function TodoList({task}){
    return(
        <div>
             { task.map((item)=>(

          <Todoitem key={item} item={item}/>
           
           ))}
        </div>
    )
}