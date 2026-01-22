import UserCard from "./UserCard";

function App() {

  const users = [
  { id: 1, name: "Nirav", role: "Staff iOS Engineer", active: true },
  { id: 2, name: "Alex", role: "Frontend Engineer", active: false },
  { id: 3, name: "Sam", role: "React Native Developer", active: true }
];
  return (
  <div style={{ padding: "20px" }}>
    <h1>Day 02: React Components & Props</h1>

    {users.map((user) => (
      <UserCard
        key={user.id}
        name={user.name}
        role={user.role}
        active={user.active}
      />
    ))}
  </div>
);

}

export default App;