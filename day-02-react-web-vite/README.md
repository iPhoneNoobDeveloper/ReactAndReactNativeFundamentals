
---

# 📘 `day-02-react-web-vite/README.md`

```md
# Day 02: React Web Fundamentals (Vite)

This day introduces **React fundamentals** using a modern
Vite-based React setup.

The focus is on understanding **how React works**, not styling
or advanced tooling.

---

## Concepts Covered

### React Basics
- React project setup using Vite
- File and folder structure
- JSX syntax (JavaScript + XML)
- Entry point (`main.jsx`)
- Root component (`App.jsx`)

### Components
- Functional components
- Component reusability
- File-based component organization

### Props
- Passing data from parent to child
- Props destructuring
- Boolean props

### Rendering
- Rendering lists using `map`
- Using `key` correctly
- Conditional rendering (`&&`, ternary)

---

## Key Files Explained

- `index.html`
  - Contains the root DOM node (`<div id="root" />`)
- `src/main.jsx`
  - Bootstraps the React app
  - Similar to `@main` / AppDelegate
- `src/App.jsx`
  - Root React component
- `src/UserCard.jsx`
  - Reusable component demonstrating props and conditionals

---

## How to Run

```bash
npm install
npm run dev
