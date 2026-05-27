/**
 * Day 09: React Native State & Interactions
 *
 * Concepts:
 * - useState in React Native
 * - TextInput as a controlled input
 * - Switch for boolean state
 * - Pressable for custom button interactions
 * - Live preview UI
 */

import { useState } from "react";
import {
  Alert,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View
} from "react-native";

export default function App() {
  const [profile, setProfile] = useState({
    name: "Nirav Jain",
    role: "Staff iOS Engineer",
    active: true,
    taps: 0
  });

  const updateField = (field, value) => {
    setProfile((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const incrementTaps = () => {
    setProfile((prev) => ({
      ...prev,
      taps: prev.taps + 1
    }));
  };

  const resetProfile = () => {
    setProfile({
      name: "",
      role: "",
      active: false,
      taps: 0
    });
  };

  const showProfile = () => {
    Alert.alert(
      "Profile",
      `${profile.name || "No name"}\n${profile.role || "No role"}`
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.heading}>Day 09: RN State & Interactions</Text>

        <View style={styles.card}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            value={profile.name}
            onChangeText={(text) => updateField("name", text)}
            placeholder="Enter name"
            style={styles.input}
          />

          <Text style={styles.label}>Role</Text>
          <TextInput
            value={profile.role}
            onChangeText={(text) => updateField("role", text)}
            placeholder="Enter role"
            style={styles.input}
          />

          <View style={styles.row}>
            <Text style={styles.label}>Active</Text>
            <Switch
              value={profile.active}
              onValueChange={(value) => updateField("active", value)}
            />
          </View>

          <Pressable style={styles.primaryButton} onPress={incrementTaps}>
            <Text style={styles.buttonText}>Tap Count: {profile.taps}</Text>
          </Pressable>

          <Pressable style={styles.secondaryButton} onPress={showProfile}>
            <Text style={styles.secondaryButtonText}>Show Alert</Text>
          </Pressable>

          <Pressable style={styles.resetButton} onPress={resetProfile}>
            <Text style={styles.resetButtonText}>Reset</Text>
          </Pressable>
        </View>

        <View style={styles.previewCard}>
          <Text style={styles.previewTitle}>Live Preview</Text>
          <Text>Name: {profile.name || "Not provided"}</Text>
          <Text>Role: {profile.role || "Not provided"}</Text>
          <Text>Status: {profile.active ? "Active" : "Inactive"}</Text>
          <Text>Taps: {profile.taps}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  content: {
    padding: 20
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20
  },
  card: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#f5f5f5",
    marginBottom: 20
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
    backgroundColor: "#fff"
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16
  },
  primaryButton: {
    backgroundColor: "#111",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold"
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: "#111",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10
  },
  secondaryButtonText: {
    color: "#111",
    fontWeight: "bold"
  },
  resetButton: {
    padding: 14,
    borderRadius: 10,
    alignItems: "center"
  },
  resetButtonText: {
    color: "red",
    fontWeight: "bold"
  },
  previewCard: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ddd"
  },
  previewTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8
  }
});