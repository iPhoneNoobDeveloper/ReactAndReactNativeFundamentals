/**
 * Day 03: State & Event Handling
 *
 * This example demonstrates:
 * - useState hook
 * - Event handling
 * - Re-rendering UI on state change
 */

import { useState } from "react";

function App() {
  // useState returns a pair:
  // 1) current state value
  // 2) function to update that value
  const [count, setCount] = useState(0);

  // Event handler function
  const increment = () => {
    // Updating state triggers a re-render
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ padding: "24px" }}>
      <h1>Day 03: useState & Event Handling</h1>

      <p>
        Current Count:
        <strong style={{ marginLeft: "8px" }}>{count}</strong>
      </p>

      {/* Button click events */}
      <button onClick={increment}>➕ Increment</button>
      <button onClick={decrement} style={{ marginLeft: "8px" }}>
        ➖ Decrement
      </button>
      <button onClick={reset} style={{ marginLeft: "8px" }}>
        🔄 Reset
      </button>
    </div>
  );
}

export default App;
