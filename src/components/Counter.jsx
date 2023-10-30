import { useContext, useState } from "react";
import CounterContext from "../contexts/Counter";

export default function Counter() {
  // Provengono ora dalle prop, ovvero è il parent a definire lo stato
  // const [counter, setCounter] = useState(0);
  const { counter, setCounter, numeroACaso } = useContext(CounterContext);
  return (
    <div>
      <h5>{counter}</h5>
      {numeroACaso}
      <button onClick={() => setCounter(counter + 1)}>Add</button>
    </div>
  );
}
