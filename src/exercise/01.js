// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import React from 'react';

function Counter({initialCount = 0, step = 1}) {
  // eslint-disable-next-line no-shadow
  const countReducer = (state, step) => state + step;
  const [count, changeCount] = React.useReducer(countReducer, initialCount);
  const increment = () => changeCount(step);
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
