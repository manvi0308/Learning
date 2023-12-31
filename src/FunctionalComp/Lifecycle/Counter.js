import React, { useState, useEffect, Children } from "react";

function Counter() {
  const initialCount = +localStorage.getItem('storageCount') || 0;
  const [count, setCount] = useState(initialCount);

  const handleIncrement = () => setCount((currentCount) => currentCount + 1);

  const handleDecrement = () => setCount((currentCount) => currentCount - 1);
  
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default Counter;
