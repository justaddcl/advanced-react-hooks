// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import React from 'react';

function Counter({initialCount = 0, step = 1}) {
  const countReducer = (state, action) => ({
    ...state,
    ...(typeof action === 'function' ? action(state) : state),
  });
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  });
  const {count} = state;
  const increment = () =>
    setState(currentState => ({count: currentState.count + step}));
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
