import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function DetailsScreen({ navigation, route }) {
  // route.params contains the object that Home sent with navigation.navigate().
  const { lessonNumber, topic, learner } = route.params;

  function completeLesson() {
    // popTo() returns to an earlier stack screen and sends fresh params to it.
    navigation.popTo('Home', {
      completedTopic: `${topic} completed`,
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>
      <Text style={styles.subtitle}>These values came from Home:</Text>

      <View style={styles.card}>
        <Text style={styles.row}>Lesson: Day {lessonNumber}</Text>
        <Text style={styles.row}>Topic: {topic}</Text>
        <Text style={styles.row}>Learner: {learner}</Text>
      </View>

      <Pressable style={styles.primaryButton} onPress={completeLesson}>
        <Text style={styles.primaryButtonText}>Complete and Return Home</Text>
      </Pressable>

      <Pressable style={styles.secondaryButton} onPress={() => navigation.goBack()}>
        <Text style={styles.secondaryButtonText}>Go Back Without Changes</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#172554',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#475569',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#f1f5f9',
    borderRadius: 12,
    padding: 18,
    marginBottom: 26,
  },
  row: {
    fontSize: 17,
    color: '#1e293b',
    marginBottom: 10,
  },
  primaryButton: {
    alignItems: 'center',
    backgroundColor: '#16a34a',
    borderRadius: 10,
    paddingVertical: 14,
    marginBottom: 12,
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    alignItems: 'center',
    borderColor: '#2563eb',
    borderRadius: 10,
    borderWidth: 1,
    paddingVertical: 14,
  },
  secondaryButtonText: {
    color: '#2563eb',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
