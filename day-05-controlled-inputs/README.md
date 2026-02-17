# Day 05: Controlled Inputs & Form Handling

This day focuses on understanding **controlled components** in React.

Controlled inputs mean:
- The input value is stored in React state
- The UI reflects state
- State updates on every change

---

## Concepts Covered

- useState for form state
- Controlled inputs (`value` + `onChange`)
- Handling multiple fields in one state object
- Checkbox handling (`checked`)
- Form submission with `preventDefault`
- Simple validation
- Conditional rendering after submit

---

## Key Learning

In React:
- The state is the single source of truth
- Never rely on DOM to store input state
- Always update state immutably

---

## React Native Mapping

| Web | React Native |
|-----|--------------|
| `<input />` | `<TextInput />` |
| `onChange` | `onChangeText` |
| `value` prop | `value` prop |
| Checkbox | Switch component |

---

## How to Run

```bash
npm install
npm run dev
