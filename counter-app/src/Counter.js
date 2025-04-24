import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  // function to add count
  const addCount = () => {
    if (count < 100) {
      setCount(count + 1);
    } else {
      alert("Maximium count reached!");
    }
  };

  // function to subtract count
  const subtractCount = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Minimium count reached!");
    }
  };

  // function to reset count
  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <h1>Counter App</h1>
      <div className="counter">
        <div className="screen">
          <p className="display"> {count} </p>
        </div>
        <div className="btns">
          <button className="btn" onClick={addCount}>
            +
          </button>
          <button className="btn" onClick={subtractCount}>
            -
          </button>
          <button className="btn" onClick={resetCount}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
