import { useState } from 'react';

function CounterApp() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Counter App</h2>
      <h3>Current Count: {count}</h3>
      <button onClick={increase}>➕ Increase</button>
      <button onClick={decrease} disabled={count === 0}>➖ Decrease</button>
      <button onClick={reset}> Reset</button>
    </div>
  );
}

export default CounterApp;
