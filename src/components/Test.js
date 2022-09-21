import React, { useState } from "react";

const Test = () => {
  const [show, setShow] = useState();

  const ToggleData = () => {
    setShow(!show);
  };

  return (
    <div className="App">
      <button onClick={ToggleData}> {!show ? "Show" : 'Dont"t show'} </button>
      {show ? <h1> Show </h1> : <h1>Don't Show </h1>}
    </div>
  );
};

export default Test;
