import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import api from "./api/data";
import List from "./components/List";

function App() {
  const [data, setData] = useState(api);
  const [showData, setShowData] = useState(true);

  function handleClick() {
    setShowData((prev) => !prev);
  }

  return (
    <div className="App">
      <h1>{showData ? data.length : 0} Birthday Reminder</h1>
      {showData ? <List data={data} /> : null}
      <button className="button" onClick={() => handleClick()}>
        {showData ? "Clear All" : "Retrieve Data"}
      </button>
    </div>
  );
}

export default App;
