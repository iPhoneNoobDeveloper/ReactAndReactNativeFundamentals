/**
 * Day 04: useEffect (Lifecycle + Side Effects)
 *
 * This example demonstrates:
 * - useState for state
 * - useEffect for side effects
 * - Cleanup function to avoid memory leaks (like invalidating a Timer in iOS)
 *
 * Effects we do here:
 * 1) Update document title whenever count changes
 * 2) Start an interval timer and clean it up when component unmounts
 */

import { useEffect, useState } from "react";

function App() {
  // State: triggers re-render when changed
  const [count, setCount] = useState(0);

  // State: shows how long the component has been running
  const [seconds, setSeconds] = useState(0);

  /**
   * Effect #1: Runs whenever `count` changes
   * - Similar to "didSet" + UI update
   * - In web apps, document.title is common
   */
  useEffect(() => {
    document.title = `Count is ${count}`;
  }, [count]); // dependency array: run effect when count changes

  /**
   * Effect #2: Runs once on mount (because dependency array is empty [])
   * - Starts an interval timer
   * - Returns cleanup to stop timer on unmount
   */
  useEffect(() => {
    const id = setInterval(() => {
      // Functional update is safest
      setSeconds((prev) => prev + 1);
    }, 1000);

    // Cleanup: runs when component unmounts
    // Also runs before re-running this effect (not applicable here since [])
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div style={{ padding: "24px" }}>
      <h1>Day 04: useEffect (Lifecycle + Side Effects)</h1>

      <p>
        <strong>Count:</strong> {count}
      </p>

      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={() => setCount((c) => c - 1)} style={{ marginLeft: "8px" }}>
        Decrement
      </button>
      <button onClick={() => setCount(0)} style={{ marginLeft: "8px" }}>
        Reset
      </button>

      <hr style={{ margin: "16px 0" }} />

      <p>
        <strong>Seconds running:</strong> {seconds}
      </p>

      <p style={{ maxWidth: "650px" }}>
        Open your browser tab title to see it update when count changes.
        The timer keeps running every second and is cleaned up automatically when
        this component unmounts.
      </p>
    </div>
  );
}

export default App;
