import { useState } from "react";
import Counter from "./components/Counter";
import CounterToText from "./components/CounterToText";
import "./styles.css";
import Logout from "./components/Logout";

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <Counter counter={counter} setCounter={setCounter} />
      {/* 
        ...immaginate una lunga lista di componenti... 
      */}
      <CounterToText counter={counter} />
      <Logout setCounter={setCounter} />
    </div>
  );
}
