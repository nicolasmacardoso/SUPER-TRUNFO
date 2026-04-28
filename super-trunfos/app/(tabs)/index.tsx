import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';

import PilotCard from '@/components/pilot-card';
import pilots from '@/data/pilots';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Super Trunfo F1</Text>

      <ScrollView contentContainerStyle={styles.list}>
        {pilots.map((pilot) => (
          <PilotCard key={pilot.id} pilot={pilot} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 16,
  },
  title: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 16,
  },
  list: {
    paddingBottom: 16,
  },
});
