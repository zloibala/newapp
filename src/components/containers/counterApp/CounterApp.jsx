import { useState } from "react";

import "./counterApp.style.css";

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const [warning, setWarning] = useState(0);

  const incrementOnClickHandler = () => {
    setCount(count + 5);
  };
  const decrementOnclikHandler = () => {
    setCount(count - 5);
  };
  const resetOnClickHandler = () => {
    setCount(0);
  };

  return (
    <div>
      <h2> Speed: {count}</h2>
      <div className="btn-box">
        <button onClick={incrementOnClickHandler}> +5 </button>
        {count > 55 && <h1> hey u are too fast </h1>}
        <button onClick={decrementOnclikHandler}> -5 </button>
        <button onClick={resetOnClickHandler}> Reset </button>
      </div>
    </div>
  );
};

export default CounterApp;
