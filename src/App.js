import { useState } from "react";
import "./App.css";
import Callbackfunction from "./FunctionalComp/Callbackfunction";
import Handlingstate from "./FunctionalComp/Handlingstate";
import Button from "./FunctionalComp/Button";
import Counter from "./FunctionalComp/Lifecycle/Counter";
const sayHello = () => setTimeout(() => console.log("Hello"), 1000);

function App() {
  const namee = "Manvi";
  const [greeting, setgreeting] = useState("Hello functional component");
  const handleChange = (event) => setgreeting(event.target.value);

  return (
    <div className="App">
      {/* How to handle state*/}
      {/*<Handlingstate name={namee} value={greeting} />*/}

      {/* How to pass a function defined in parent component as a prop*/}
      {/*<Callbackfunction headline={greeting} onChangeheadline={handleChange} />*/}

      {/* Oveeriding function component with react*/}
     {/* <Button handleClick={sayHello} /> */} 

     {/* Lifecycle*/}
     <Counter/>
    </div>
  );
}

export default App;
