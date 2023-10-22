import React from "react";

const useCounter = (initalValue, alertName) => {
  const [counter, setCounter] = React.useState(initalValue);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const Alert = () => alert(alertName);

  return [counter, increment, decrement, Alert];
};

export default function game() {
  const [counter, increment, decrement, Alert] = useCounter(10, "Hose");

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={Alert}>alert</button>
    </div>
  );
}
