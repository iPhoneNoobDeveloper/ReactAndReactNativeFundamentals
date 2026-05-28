/**
 * Day 12: React Native Search & Filter
 *
 * Concepts:
 * - Controlled TextInput for search text
 * - Filtering a list from state
 * - FlatList for rendering results
 * - ListEmptyComponent for no matches
 */

import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";

const users = [
  { id: "user-1", name: "Nirav Jain", role: "Staff iOS Engineer" },
  { id: "user-2", name: "Maya Patel", role: "React Native Developer" },
  { id: "user-3", name: "Jordan Lee", role: "Frontend Engineer" },
  { id: "user-4", name: "Sam Rivera", role: "Product Designer" },
  { id: "user-5", name: "Taylor Kim", role: "Mobile Architect" },
  { id: "user-6", name: "Alex Morgan", role: "QA Engineer" },
  { id: "user-7", name: "Priya Shah", role: "Full Stack Engineer" },
  { id: "user-8", name: "Chris Walker", role: "Engineering Manager" }
];

function UserCard({ user }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.role}>{user.role}</Text>
    </View>
  );
}

export default function App() {
  // This state stores the current search text. Because TextInput reads from
  // value and updates with onChangeText, it is a controlled TextInput.
  const [searchText, setSearchText] = useState("");

  const normalizedSearchText = searchText.trim().toLowerCase();

  // Filtering is based on state. Every time searchText changes, React runs this
  // component again and creates a filtered list from the original users array.
  const filteredUsers = users.filter((user) => {
    const nameMatches = user.name.toLowerCase().includes(normalizedSearchText);
    const roleMatches = user.role.toLowerCase().includes(normalizedSearchText);

    return nameMatches || roleMatches;
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.content}>
        <Text style={styles.heading}>User Directory</Text>
        <Text style={styles.subheading}>Search by name or role.</Text>

        <View style={styles.searchRow}>
          <TextInput
            style={styles.searchInput}
            value={searchText}
            onChangeText={setSearchText}
            placeholder="Search users"
            placeholderTextColor="#777"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Pressable
            style={({ pressed }) => [
              styles.clearButton,
              pressed && styles.clearButtonPressed,
              searchText.length === 0 && styles.clearButtonDisabled
            ]}
            onPress={() => setSearchText("")}
            disabled={searchText.length === 0}
          >
            <Text style={styles.clearButtonText}>Clear</Text>
          </Pressable>
        </View>

        <Text style={styles.resultCount}>
          {filteredUsers.length} {filteredUsers.length === 1 ? "result" : "results"}
        </Text>

        <FlatList
          // FlatList receives the filtered data and renders only the matching users.
          data={filteredUsers}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <UserCard user={item} />}
          contentContainerStyle={styles.listContent}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          // This empty state appears when the filtered list has no matching users.
          ListEmptyComponent={
            <View style={styles.emptyState}>
              <Text style={styles.emptyTitle}>No users found</Text>
              <Text style={styles.emptyText}>Try a different name or role.</Text>
            </View>
          }
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
  content: {
    flex: 1,
    padding: 20
  },
  heading: {
    color: "#1f2937",
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 6
  },
  subheading: {
    color: "#4b5563",
    fontSize: 16,
    marginBottom: 20
  },
  searchRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 12
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#fff",
    borderColor: "#d1d5db",
    borderRadius: 8,
    borderWidth: 1,
    color: "#111827",
    fontSize: 16,
    paddingHorizontal: 14,
    paddingVertical: 12
  },
  clearButton: {
    alignItems: "center",
    backgroundColor: "#2563eb",
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 16
  },
  clearButtonPressed: {
    backgroundColor: "#1d4ed8"
  },
  clearButtonDisabled: {
    backgroundColor: "#9ca3af"
  },
  clearButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700"
  },
  resultCount: {
    color: "#4b5563",
    fontSize: 14,
    marginBottom: 12
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
    marginBottom: 4
  },
  role: {
    color: "#4b5563",
    fontSize: 15
  },
  emptyState: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "#e5e7eb",
    borderRadius: 8,
    borderWidth: 1,
    padding: 24
  },
  emptyTitle: {
    color: "#111827",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 6
  },
  emptyText: {
    color: "#4b5563",
    fontSize: 15,
    textAlign: "center"
  }
});
