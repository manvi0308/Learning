import React, { useState } from "react";

function Toggle({ toggle, onToggle }) {

const [title, setTitle] = useState('Hello React');
  // [] is called dependency array, useEffect Hook has
  // no dependencies, meaning it runs only the first time
  // a component renders
  React.useEffect(() => {
    console.log("I run only if toggle changes (and on mount).");
  }, [toggle]);

  const handleChange = (event) => {
    setTitle(event.target.value);
  }
  return (
    <div>
              <input type="text" value={title} onChange={handleChange} />

      <button type="button" onClick={onToggle}>
        Toggle
      </button>
      {toggle && <div>Hello World</div>}
    </div>
  );
}

export default Toggle;
