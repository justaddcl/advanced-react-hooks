// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import React from 'react';

function Counter({initialCount = 0, step = 1}) {
  const countReducer = (state, newState) => newState;
  const [count, setCount] = React.useReducer(countReducer, initialCount);

  const increment = () => setCount(count + step);
  return (
    <button type="button" onClick={increment}>
      {count}
    </button>
  );
}

function App() {
  return <Counter />;
}

export default App;
