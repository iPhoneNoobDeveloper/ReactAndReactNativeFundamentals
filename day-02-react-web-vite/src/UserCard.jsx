/**
 * UserCard.jsx
 *
 * A reusable React component.
 * Think of this like a SwiftUI View or a custom UIView.
 *
 * Props:
 * - name   : String (user name)
 * - role   : String (user role)
 * - active : Boolean (user status)
 */

// Destructuring props directly in function parameters
// This avoids using props.name, props.role, etc.
function UserCard({ name, role, active }) {
  return (
    // Inline styles are written as JavaScript objects
    // Keys are camelCased (borderRadius, fontWeight, etc.)
    <div
      style={{
        border: "1px solid #ccc",
        padding: "12px",
        margin: "8px",
        borderRadius: "6px"
      }}
    >
      {/* JSX allows embedding JS expressions using {} */}
      <h3>{name}</h3>

      <p>Role: {role}</p>

      {/* Ternary operator for conditional text */}
      <p>Status: {active ? "Active" : "Inactive"}</p>

      {/* Conditional rendering using logical AND (&&)
          If `active` is true, the JSX on the right is rendered
          If false, nothing is rendered
       */}
      {active && (
        <p style={{ color: "green", fontWeight: "bold" }}>
          ✓ User is active
        </p>
      )}
    </div>
  );
}

// Export so this component can be used in other files
export default UserCard;
