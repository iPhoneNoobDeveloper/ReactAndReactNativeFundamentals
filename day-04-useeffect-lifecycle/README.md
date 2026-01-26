# Day 04: useEffect (Lifecycle + Side Effects)

This day focuses on understanding **useEffect**, which is how React handles
side effects such as timers, subscriptions, DOM updates, and API calls.

---

## Concepts Covered
- `useEffect` basics
- Dependency array behavior
  - `[]` runs once on mount
  - `[value]` runs when value changes
- Cleanup function (prevents memory leaks)
- Timer example with `setInterval` + `clearInterval`

---

## What this demo shows
1. Updates browser tab title whenever `count` changes
2. Starts a timer on mount and cleans it up on unmount

---

## How to Run
```bash
npm install
npm run dev
