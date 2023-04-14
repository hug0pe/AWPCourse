import React, { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  //const [name, setName] = useState('Laval');


  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  );
}