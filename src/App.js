import "./styles.css";
import React, { useState, useMemo } from "react";

export default function App() {
  const [data, setData] = useState(0);
  const [update, setUpdate] = useState(1);
  const newApple = useMemo(
    function appleTime() {
      console.warn("hello");
      return 100 * data;
    },
    [update]
  );
  return (
    <div className="App">
      <h1> {newApple} </h1>
      <h1> {data} </h1>
      <h1> {update} </h1>
      <button onClick={() => setData(data + 1)}> Set Data</button>
      <button onClick={() => setUpdate(update * 10)}> Update Data </button>
    </div>
  );
}
