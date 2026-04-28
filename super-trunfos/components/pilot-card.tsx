import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import type { Pilot } from '@/data/pilots';

type PilotCardProps = {
  pilot: Pilot;
};

export default function PilotCard({ pilot }: PilotCardProps) {
  const renderStars = (quantity: number) => {
    return '\u2B50'.repeat(quantity);
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: pilot.image }} style={styles.image} />

      <Text style={styles.name}>{pilot.name}</Text>
      <Text style={styles.description}>{pilot.description}</Text>
      <Text style={styles.info}>Equipe: {pilot.team}</Text>
      <Text style={styles.info}>Pa\u00EDs: {pilot.country}</Text>
      <Text style={styles.stars}>{renderStars(pilot.stars)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#2f2f2f',
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 4,
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 12,
    marginBottom: 12,
  },
  name: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  description: {
    color: '#d1d5db',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 12,
  },
  info: {
    color: '#e5e7eb',
    fontSize: 14,
    marginBottom: 4,
  },
  stars: {
    fontSize: 20,
    marginTop: 8,
  },
});
