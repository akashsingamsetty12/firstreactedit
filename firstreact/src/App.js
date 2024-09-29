import "./App.css";
import { useState } from "react";
function App(){
const[age, setAge]=useState(0);
const increase=()=>{
  setAge(age+1);
  console.log(age);
};

return(
  <div>
    {age}
    <button onClick={increase}>Increase age</button>
  </div>
);
}
export default App;
