import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
