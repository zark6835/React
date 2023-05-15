import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./counter.css";

function App() {
const dispatch = useDispatch()
const cash = useSelector(state => state.number)

function pluse() {
  dispatch({type: "PLUSE", payload: 1})
}

function minus() {
  dispatch({type: "MINUS", payload: 1})
}

  return (
    <div className="container">
      <p className="counter">{cash}</p>
      <div className="wrapper">
        <button className="btn" onClick={() => pluse()}>+</button>
        <button className="btn" onClick={() => minus()}>-</button>
      </div>
    </div>
  );
}

export default App;
