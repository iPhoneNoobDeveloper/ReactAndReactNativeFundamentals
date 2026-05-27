/**
 * Day 10: React Native Lists with FlatList
 *
 * Concepts:
 * - FlatList for efficient list rendering
 * - renderItem for row UI
 * - keyExtractor for stable item identity
 * - Reusable row component
 */

import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";

const users = [
  { id: "1", name: "Nirav Jain", role: "Staff iOS Engineer", active: true },
  { id: "2", name: "Alex", role: "React Native Developer", active: false },
  { id: "3", name: "Sam", role: "Frontend Engineer", active: true },
  { id: "4", name: "Taylor", role: "Mobile Architect", active: true },
  { id: "5", name: "Jordan", role: "Full Stack Engineer", active: false }
];

function UserRow({ user }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.role}>{user.role}</Text>
      <Text style={user.active ? styles.active : styles.inactive}>
        {user.active ? "Active" : "Inactive"}
      </Text>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Day 10: FlatList</Text>

      <FlatList
  data={users}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => <UserRow user={item} />}
  contentContainerStyle={styles.listContent}
  ListHeaderComponent={
    <Text style={{ marginBottom: 16 }}>
      Team Members
    </Text>
  }
  ItemSeparatorComponent={() => (
    <View style={{ height: 8 }} />
  )}
/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16
  },
  listContent: {
    paddingBottom: 20
  },
  card: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#f5f5f5",
    marginBottom: 12
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4
  },
  role: {
    fontSize: 16,
    marginBottom: 6
  },
  active: {
    color: "green",
    fontWeight: "bold"
  },
  inactive: {
    color: "red",
    fontWeight: "bold"
  }
});