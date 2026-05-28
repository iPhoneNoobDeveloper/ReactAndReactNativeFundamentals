# Day 07: Component Composition & Reusable UI Patterns

This day focuses on breaking a React screen into small reusable components and composing them together.

## Concepts Covered

- Component composition
- Reusable layout components
- Reusable container components
- Passing props to child components
- Passing callback props for events
- Using the `children` prop to wrap flexible JSX content

## Component Structure

```text
App
├── Section
├── Card
└── ReusableButton
```

## What This App Demonstrates

`App.jsx` renders two example sections:

- A profile card with text content and a reusable button
- A learning progress card with a list of completed topics

`Section.jsx` is a reusable layout wrapper. It accepts a `heading` prop and renders any nested content through `children`.

`Card.jsx` is a reusable container component. It accepts a `title` prop and uses `children` so each card can show different JSX inside the same card layout.

`ReusableButton.jsx` accepts a `label` prop for display text and an `onClick` callback prop for behavior.

## Key Learning

The `children` prop lets a component wrap any JSX placed between its opening and closing tags.

Example:

```jsx
<Card title="Profile Card">
  <p>Name: Nirav</p>
  <p>Role: Staff iOS Engineer</p>
</Card>
```

This keeps the card layout reusable while allowing each card to show different content.

## How to Run

```bash
npm install
npm run dev
```

Open the local URL printed by Vite in your terminal.
