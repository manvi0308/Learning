import React from 'react'

function Counter() {
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleIncrement}>
            Increment
        </button>
        <button onClick={handleDecrement}>
            Decrement
        </button>
    </div>
  )
}

export default Counter