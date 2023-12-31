import React, { useState } from "react";
function Item({ item }) {
  return (
    <li>
      {item.fName} {item.lName}
    </li>
  );
}

function loadingIndicator({ isLoading }) {
  // this will work only if isLoading propis passed
  return <div>{isLoading && <p>Loading .....</p>}</div>;
}
function Conditional({ list }) {
  // if passed list is empry don't render list
  if (!list) {
    return null;
  }
  return (
    <>
      <ul>
        {list.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      <loadingIndicator isLoading={true}/>
      </ul>
    </>
  );
}

export default Conditional;
