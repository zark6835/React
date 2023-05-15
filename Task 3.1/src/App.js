import React, { useState } from "react";
import classes from "./counter.css";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="container">
      <p className="counter">{counter}</p>
      <div className="wrapper">
        <button className="btn" onClick={() => setCounter((counter + 1))}>+</button>
        <button className="btn" onClick={() => setCounter((counter - 1))}>-</button>
      </div>
    </div>
  );
}

export default App;
