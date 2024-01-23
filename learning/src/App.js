import React, { useState } from "react";

export default function App() {
 const [count, setcount] = useState(0);
 function handleClick(){
  setcount(count => count + 1);
 }
  return (
    <>
    <p>{count}</p>
    <button onClick={() => {
      setcount(count + 1);
      console.log(count);
      setcount(count => count + 5);
      console.log(count)
      setcount(101)
    }

    }>Increment</button>
    </>
  );
}
