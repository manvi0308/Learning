import React, { useState } from "react";

function HandlingState(props) {
  const [dtext, setDtext] = useState("Hello Function Component!");
  const [text, setText] = useState("Setting text using a separate function");

  const handleChange = (event) => {
    setText(event.target.value);
  };
 return (
    <div>
      <h1>
        {props.value} {props.name}
      </h1>
      <input
        type="text"
        value={dtext}
        onChange={(event) => setDtext(event.target.value)}
      />

      <input type="text" value={text} onChange={handleChange} />
    </div>
 );
}

export default HandlingState;
