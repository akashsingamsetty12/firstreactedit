import "./App.css";
function App() {
  return (
    <div>
    <GetComponent name="akash" age={12} gmail="akashsingad@gmail.com" />
    <GetComponent name="ak" age={12} gmail="akashsingad@gmail.com" />
    <GetComponent/>
    </div>
  );
}
const GetComponent =(props)=>{
  return(
    <div class="App">
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.gmail}</h1>


    </div>
  );
};

export default App;
