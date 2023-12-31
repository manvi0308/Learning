import React from 'react'

function Callbackfunction({headline, onChangeheadline}) {
  //^ You can pass a function to a Child Component and handle what happens up in the Parent Component
  return (
    <div>
      <h1>{headline}</h1>
      <input type="text"  value={headline} onChange={onChangeheadline}/>
    </div>
  )
}

export default Callbackfunction;