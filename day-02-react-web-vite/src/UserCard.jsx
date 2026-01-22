// UserCard.jsx
// Using destructuring for cleaner code

function UserCard({ name, role, active }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "12px", margin: "8px" }}>
      <h3>{name}</h3>
      <p>Role: {role}</p>
      <p>Status: {active ? "Active" : "Inactive"}</p>
    </div>
  );
}

export default UserCard;
