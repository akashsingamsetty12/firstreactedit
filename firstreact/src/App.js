import "./App.css";
import { useState } from "react";
function App(){
const [show,setshow]=useState("blue");

return(
  <div>
    <button onClick={()=>{setshow(show==="blue"?"red":"blue")}}>Show/Hide</button>
<p style={{color:show}}>Hi my name is akash</p>
</div>
);
}
export default App;
