import { useState } from "react";

export default function Counter({ counter, setCounter }) {
  // Provengono ora dalle prop, ovvero è il parent a definire lo stato
  // const [counter, setCounter] = useState(0);
  return (
    <div>
      <h5>{counter}</h5>
      <button onClick={() => setCounter(counter + 1)}>Add</button>
    </div>
  );
}
