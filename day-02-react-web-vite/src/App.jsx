/**
 * App.jsx
 *
 * Root React component.
 * Similar to:
 * - Root SwiftUI View
 * - Root ViewController
 */

import UserCard from "./UserCard";

function App() {
  /**
   * Local data for rendering UI
   * In real apps, this usually comes from:
   * - API calls
   * - State (useState)
   * - Context / Redux
   */
  const users = [
    { id: 1, name: "Nirav", role: "Staff iOS Engineer", active: true },
    { id: 2, name: "Alex", role: "Frontend Engineer", active: false },
    { id: 3, name: "Sam", role: "React Native Developer", active: true }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Day 02: React Components & Props</h1>

      {/* 
        Rendering a list using map()
        This is the most common React pattern.

        Key rules:
        - map returns JSX
        - Each item MUST have a unique `key`
        - key helps React efficiently update UI
      */}
      {users.map((user) => (
        <UserCard
          key={user.id}         // Unique key (important!)
          name={user.name}     // Passing props
          role={user.role}
          active={user.active}
        />
      ))}
    </div>
  );
}

// Export App so it can be rendered by main.jsx
export default App;