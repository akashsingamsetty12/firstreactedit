import "./App.css";
import { useState } from "react";
function App(){
  const [todo,settodo]=useState([]);
  const [newtask,setnewtask]=useState("");
  const handle=(props)=>{
    setnewtask(props.target.value);
  };

  const addtask=()=>{
    const n=[todo,newtask];
    settodo(n);
  };

  const deletetask =(taskname)=>{
    const n=todo.filter((task)=>{
      if(task===taskname){
        return false;
      }
      else{
        return true;
      }
    });
settodo(n);
  };
  return(
  <div className="App">
    <div classname="First">
      <input type="text" onChange={handle}/>
      <button onClick={addtask}>add task</button>
    </div>
    <div classname="second">
      {todo.map((task)=>{
        return(
        <div>
          
          <h1>{task}</h1>
          <button onClick={() =>deletetask(task)}>X</button>
        </div>
        );
      })}
    </div>
  </div>
  );

}
export default App;
