/**
 * Day 13: React Native API Calls with fetch
 *
 * Concepts:
 * - useEffect for the initial API call
 * - async/await with fetch
 * - loading, error, and data state
 * - retry flow
 * - FlatList rendering
 */

import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from "react-native";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

function UserCard({ user }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.username}>@{user.username}</Text>
      <Text style={styles.detail}>{user.email}</Text>
      <Text style={styles.detail}>{user.company.name}</Text>
    </View>
  );
}

export default function App() {
  // These three state values describe the API request:
  // users stores successful data, isLoading controls spinners, and
  // errorMessage stores a message when the request fails.
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function fetchUsers({ refresh = false } = {}) {
    try {
      if (refresh) {
        setIsRefreshing(true);
      } else {
        setIsLoading(true);
      }

      setErrorMessage("");

      // async/await lets this code read from top to bottom while waiting for
      // fetch to finish before reading the JSON response body.
      const response = await fetch(USERS_URL);

      if (!response.ok) {
        throw new Error("The server returned an error.");
      }

      const nextUsers = await response.json();
      setUsers(nextUsers);
    } catch (error) {
      setErrorMessage("Could not load users. Please try again.");
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  }

  // useEffect runs after the first render. An empty dependency array means this
  // initial API call runs once when the screen first opens.
  useEffect(() => {
    fetchUsers();
  }, []);

  function handleRetry() {
    // Retry uses the same fetch function as the initial load, so the retry flow
    // resets the error message, shows loading state, and requests the data again.
    fetchUsers();
  }

  if (isLoading) {
    return (
      <SafeAreaView style={styles.centeredContainer}>
        <StatusBar style="dark" />
        <ActivityIndicator size="large" color="#2563eb" />
        <Text style={styles.loadingText}>Loading users...</Text>
      </SafeAreaView>
    );
  }

  if (errorMessage) {
    return (
      <SafeAreaView style={styles.centeredContainer}>
        <StatusBar style="dark" />
        <Text style={styles.errorTitle}>Something went wrong</Text>
        <Text style={styles.errorText}>{errorMessage}</Text>
        <Pressable
          style={({ pressed }) => [styles.retryButton, pressed && styles.retryButtonPressed]}
          onPress={handleRetry}
        >
          <Text style={styles.retryButtonText}>Retry</Text>
        </Pressable>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.content}>
        <Text style={styles.heading}>API Users</Text>
        <Text style={styles.subheading}>Fetched from JSONPlaceholder with fetch.</Text>

        <FlatList
          // FlatList renders the users returned by the API. keyExtractor uses a
          // stable id from the server so React Native can track each row.
          data={users}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <UserCard user={item} />}
          contentContainerStyle={styles.listContent}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          refreshing={isRefreshing}
          onRefresh={() => fetchUsers({ refresh: true })}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f8fb"
  },
  centeredContainer: {
    alignItems: "center",
    backgroundColor: "#f7f8fb",
    flex: 1,
    justifyContent: "center",
    padding: 24
  },
  content: {
    flex: 1,
    padding: 20
  },
  heading: {
    color: "#111827",
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 6
  },
  subheading: {
    color: "#4b5563",
    fontSize: 16,
    marginBottom: 20
  },
  loadingText: {
    color: "#4b5563",
    fontSize: 16,
    marginTop: 12
  },
  errorTitle: {
    color: "#111827",
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 8,
    textAlign: "center"
  },
  errorText: {
    color: "#4b5563",
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 20,
    textAlign: "center"
  },
  retryButton: {
    backgroundColor: "#2563eb",
    borderRadius: 8,
    paddingHorizontal: 22,
    paddingVertical: 12
  },
  retryButtonPressed: {
    backgroundColor: "#1d4ed8"
  },
  retryButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700"
  },
  listContent: {
    paddingBottom: 24
  },
  separator: {
    height: 10
  },
  card: {
    backgroundColor: "#fff",
    borderColor: "#e5e7eb",
    borderRadius: 8,
    borderWidth: 1,
    padding: 16
  },
  name: {
    color: "#111827",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 3
  },
  username: {
    color: "#2563eb",
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 8
  },
  detail: {
    color: "#4b5563",
    fontSize: 15,
    marginBottom: 3
  }
});
