/**
 * Day 01 - Modern JavaScript for React & React Native
 *
 * How to run:
 *   npm start
 *
 * Notes:
 * - This file is intentionally "lengthy" and well commented.
 * - Read it top to bottom like a guided tutorial.
 * - The patterns here show up daily in React + React Native code.
 */

// ------------------------------------------------------------
// 0) JavaScript runtime basics
// ------------------------------------------------------------
// Node runs this file. React tooling (Vite/Metro) also runs JS/TS,
// but in a different environment (browser / RN runtime).
console.log("\n=== Day 01: Modern JavaScript Refresher ===\n");

// ------------------------------------------------------------
// 1) let vs const
// ------------------------------------------------------------
// Rule of thumb: use const by default.
// Use let only when you need to reassign.
const appName = "ReactAndReactNativeFundamentals";
let sessionCount = 1;
sessionCount += 1;

console.log("1) let/const");
console.log("appName:", appName);
console.log("sessionCount:", sessionCount, "\n");

// Important nuance:
// const prevents reassignment of the variable binding,
// but objects/arrays can still be mutated unless you avoid it.
const mutableArray = [1, 2, 3];
mutableArray.push(4); // allowed (mutation)
console.log("const array mutated:", mutableArray, "\n");

// ------------------------------------------------------------
// 2) Dynamic types + common "quirks"
// ------------------------------------------------------------
// JS is dynamically typed, so types can change at runtime.
let value = 10;
value = "ten"; // valid in JS (be careful)
console.log("2) dynamic types");
console.log("value:", value);
console.log("'5' + 1 =", "5" + 1, "(string concatenation)");
console.log("'5' - 1 =", "5" - 1, "(numeric conversion)\n");

// Use === instead of == to avoid weird coercion issues.
console.log("2b) equality");
console.log("0 == false:", 0 == false);   // true (coercion)
console.log("0 === false:", 0 === false); // false (strict)\n";

// ------------------------------------------------------------
// 3) Functions: declarations vs expressions vs arrow functions
// ------------------------------------------------------------
// Function declaration (hoisted)
function addDeclared(a, b) {
  return a + b;
}

// Function expression
const addExpression = function (a, b) {
  return a + b;
};

// Arrow function (most common in React)
const addArrow = (a, b) => a + b;

// Arrow with block body
const greet = (name) => {
  return `Hello, ${name}!`;
};

console.log("3) functions");
console.log("addDeclared(2,3):", addDeclared(2, 3));
console.log("addExpression(2,3):", addExpression(2, 3));
console.log("addArrow(2,3):", addArrow(2, 3));
console.log(greet("Nirav"), "\n");

// React usage example:
// onPress={() => doSomething()} -> arrow function passed as callback

// ------------------------------------------------------------
// 4) Template literals
// ------------------------------------------------------------
const firstName = "Nirav";
const role = "iOS Engineer learning React";
console.log("4) template literals");
console.log(`${firstName} is an ${role}.`, "\n");

// ------------------------------------------------------------
// 5) Objects + Destructuring (very common with props/state)
// ------------------------------------------------------------
const user = {
  id: 1,
  name: "A",
  active: true,
  address: {
    city: "Sunnyvale",
    country: "USA",
  },
};

const { id, active } = user; // basic destructure
const {
  name: userName,
  address: { city },
} = user; // rename + nested destructure

console.log("5) destructuring");
console.log("id:", id);
console.log("active:", active);
console.log("userName:", userName);
console.log("city:", city, "\n");

// Function parameter destructuring (React props style)
const printUser = ({ id, name, address: { city } }) => {
  console.log(`User(${id}) ${name} from ${city}`);
};
printUser(user);
console.log("");

// ------------------------------------------------------------
// 6) Arrays + Destructuring
// ------------------------------------------------------------
const scores = [10, 20, 30, 40];
const [first, second, ...rest] = scores;

console.log("6) array destructuring");
console.log("first:", first);
console.log("second:", second);
console.log("rest:", rest, "\n");

// ------------------------------------------------------------
// 7) Spread operator (immutability for React state updates)
// ------------------------------------------------------------
// In React you should NOT mutate state directly.
// Instead create a new object/array using spread.

const state = {
  count: 1,
  theme: "dark",
  meta: { lastUpdatedBy: "system" },
};

// Shallow copy with spread:
const nextState = { ...state, count: state.count + 1 };

// Important: nested objects are still shared (shallow copy)
const nextStateDeepish = {
  ...state,
  meta: { ...state.meta, lastUpdatedBy: "Nirav" },
};

console.log("7) spread operator (immutability)");
console.log("state:", state);
console.log("nextState:", nextState);
console.log("nextStateDeepish:", nextStateDeepish, "\n");

// Array spread:
const fruits = ["Apple", "Banana"];
const moreFruits = [...fruits, "Cherry"];
console.log("array spread:", moreFruits, "\n");

// ------------------------------------------------------------
// 8) Array methods: map, filter, reduce (React renders lists using map)
// ------------------------------------------------------------
const users = [
  { id: 1, name: "A", active: true },
  { id: 2, name: "B", active: false },
  { id: 3, name: "C", active: true },
];

const activeUsers = users.filter((u) => u.active);
const userNames = users.map((u) => u.name);

// reduce to build a lookup dictionary (id -> user)
const userById = users.reduce((acc, u) => {
  acc[u.id] = u;
  return acc;
}, {});

console.log("8) map/filter/reduce");
console.log("activeUsers:", activeUsers);
console.log("userNames:", userNames);
console.log("userById:", userById, "\n");

// Bonus: chaining
const activeNames = users
  .filter((u) => u.active)
  .map((u) => u.name.toUpperCase());

console.log("activeNames (chained):", activeNames, "\n");

// ------------------------------------------------------------
// 9) Optional chaining + nullish coalescing (safe access, defaults)
// ------------------------------------------------------------
const apiResponse = {
  data: {
    profile: {
      // avatarUrl might be missing
    },
  },
};

const avatarUrl = apiResponse?.data?.profile?.avatarUrl ?? "default-avatar.png";
console.log("9) optional chaining + nullish coalescing");
console.log("avatarUrl:", avatarUrl, "\n");

// ------------------------------------------------------------
// 10) Promises + async/await (network calls in RN look like this)
// ------------------------------------------------------------
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fakeFetchUser(id) {
  // Simulate latency
  await wait(250);

  // Simulate response object you might get from an API
  return { id, name: `User${id}`, active: id % 2 === 1 };
}

async function demoAsyncFlow() {
  console.log("10) async/await");

  const u1 = await fakeFetchUser(1);
  const u2 = await fakeFetchUser(2);

  console.log("Fetched u1:", u1);
  console.log("Fetched u2:", u2);

  // Parallel fetch example (Promise.all)
  const ids = [3, 4, 5];
  const results = await Promise.all(ids.map((id) => fakeFetchUser(id)));
  console.log("Fetched in parallel:", results, "\n");
}

await demoAsyncFlow();

// ------------------------------------------------------------
// 11) Error handling with try/catch (important for production apps)
// ------------------------------------------------------------
async function fakeFetchWithError() {
  await wait(100);
  throw new Error("Network request failed (simulated)");
}

async function demoErrorHandling() {
  console.log("11) try/catch error handling");

  try {
    await fakeFetchWithError();
    console.log("This line will not run");
  } catch (err) {
    console.log("Caught error:", err.message);
  } finally {
    console.log("Finally runs (cleanup / stop loader)\n");
  }
}

await demoErrorHandling();

// ------------------------------------------------------------
// 12) Classes (less common in modern React, but good to know)
// ------------------------------------------------------------
// React used to be class-based. Now most code uses function components + hooks.
// Still, understanding classes can help reading older code.

class Counter {
  constructor(initial = 0) {
    this.value = initial;
  }

  increment() {
    this.value += 1;
    return this.value;
  }
}

const c = new Counter(5);
console.log("12) classes");
console.log("counter:", c.value);
console.log("increment:", c.increment());
console.log("increment:", c.increment(), "\n");

// ------------------------------------------------------------
// 13) Prototypal inheritance (JS object model)
// ------------------------------------------------------------
const baseUser = {
  type: "base",
  describe() {
    return `type=${this.type}`;
  },
};

const adminUser = Object.create(baseUser);
adminUser.type = "admin";

console.log("13) prototypal model");
console.log("baseUser.describe():", baseUser.describe());
console.log("adminUser.describe():", adminUser.describe());
console.log("adminUser has baseUser as prototype:", Object.getPrototypeOf(adminUser) === baseUser, "\n");

// ------------------------------------------------------------
// 14) Practical mini task (like state transformations in React)
// ------------------------------------------------------------
const todos = [
  { id: 1, title: "Learn JS", done: false },
  { id: 2, title: "Setup repo", done: true },
];

// Mark todo id=1 as done (immutable update)
const updatedTodos = todos.map((t) =>
  t.id === 1 ? { ...t, done: true } : t
);

console.log("14) immutable list update");
console.log("todos:", todos);
console.log("updatedTodos:", updatedTodos, "\n");

// ------------------------------------------------------------
// End
// ------------------------------------------------------------
console.log("=== Day 01 complete. Next: Day 02 JSX + React basics ===\n");
