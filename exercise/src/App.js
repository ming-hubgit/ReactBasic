import React, { useState } from 'react';

import './styles.css';

// don't change the Component name "App"
export default function App() {
  const [num, setNum] = useState(0);

  const numPlusClickHandler = () => {
    setNum(num + 1)
  };

  const numMinusClickHandler = () => {
    setNum(num - 1)
  };

    return (
      <div>
        <p id="counter">{num}</p>
        <button onClick={numPlusClickHandler}>+</button>
        <button onClick={numMinusClickHandler}>-</button>
      </div>
    );
}