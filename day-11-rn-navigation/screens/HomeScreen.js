import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen({ navigation, route }) {
  // Params sent from Details are available on the Home route when we return.
  const completedTopic = route.params?.completedTopic;

  function openDetails() {
    // navigate() opens Details and sends an object of values called params.
    navigation.navigate('Details', {
      lessonNumber: 11,
      topic: 'Passing Params',
      learner: 'React Native Student',
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Text style={styles.description}>
        Start on Home, then navigate to Details with lesson information.
      </Text>

      <View style={styles.statusCard}>
        <Text style={styles.label}>Returned param:</Text>
        <Text style={styles.status}>
          {completedTopic ?? 'Visit Details and mark the topic complete.'}
        </Text>
      </View>

      <Pressable style={styles.button} onPress={openDetails}>
        <Text style={styles.buttonText}>Open Details</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f8fafc',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#172554',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#334155',
    marginBottom: 24,
  },
  statusCard: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#e0f2fe',
    marginBottom: 24,
  },
  label: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#0369a1',
    marginBottom: 6,
    textTransform: 'uppercase',
  },
  status: {
    fontSize: 16,
    color: '#0c4a6e',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#2563eb',
    borderRadius: 10,
    paddingVertical: 14,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
