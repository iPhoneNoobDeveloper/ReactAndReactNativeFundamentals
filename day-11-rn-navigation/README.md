# Day 11: React Native Navigation

This day introduces moving between screens with React Navigation's native stack navigator.

## Concepts Covered

- `NavigationContainer`
- `createNativeStackNavigator`
- Registering `HomeScreen` and `DetailsScreen`
- Navigating with `navigation.navigate()`
- Passing values through `route.params`
- Returning a new param to a previous screen

## App Flow

1. `HomeScreen` opens `DetailsScreen` and sends lesson params.
2. `DetailsScreen` reads the values from `route.params`.
3. Selecting **Complete and Return Home** calls `navigation.popTo()` with a completed-topic param.
4. `HomeScreen` displays the value received from Details.

## Project Structure

```text
day-11-rn-navigation/
├── App.js
└── screens/
    ├── DetailsScreen.js
    └── HomeScreen.js
```

## How to Run

```bash
npm install
npx expo start
```

Use Expo Go on a device, or press `i`/`a` in the Expo terminal to launch an available simulator or emulator.
