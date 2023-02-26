import "./styles.css";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <input type="text" onChange={(e) => setValue(e.target.value)}></input>
      <button disabled={value.length < 1}>Submit</button>
    </div>
  );
}
