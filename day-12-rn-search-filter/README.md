# Day 12: React Native Search & Filter

This day builds a simple user directory with live search filtering in React Native.

## Concepts Covered

- Expo blank app
- Controlled `TextInput`
- Filtering data from state
- Searching by user name and role
- `FlatList`
- `keyExtractor` with stable ids
- `ListEmptyComponent`
- Clear search button
- Basic `StyleSheet` styling

## Key Learning

The search box is a controlled input because React state stores the text and passes it back into the `TextInput` with `value`.

The list is filtered from the original `users` array. When the search text changes, React renders again and `FlatList` receives the matching users.

## Project Structure

```text
day-12-rn-search-filter/
├── App.js
├── app.json
├── index.js
├── package.json
└── README.md
```

## How to Run

```bash
npm install
npx expo start
```

Use Expo Go on a device, or press `i`/`a` in the Expo terminal to launch an available simulator or emulator.
