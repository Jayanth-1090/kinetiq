import { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { EXERCISES, Exercise, Difficulty } from '../data/exercises';

type Filter = 'all' | Difficulty;

export default function HomeScreen() {
  const [activeFilter, setActiveFilter] = useState<Filter>('all');

  const filtered = activeFilter === 'all'
    ? EXERCISES
    : EXERCISES.filter(e => e.difficulty === activeFilter);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Text style={styles.logo}>KINETIQ</Text>
        <Text style={styles.subtitle}>Choose your workout</Text>
      </View>

      <View style={styles.filterRow}>
        {(['all', 'beginner', 'intermediate', 'advanced'] as Filter[]).map(f => (
          <TouchableOpacity
            key={f}
            style={[styles.filterBtn, activeFilter === f && styles.filterBtnActive]}
            onPress={() => setActiveFilter(f)}
          >
            <Text style={[styles.filterText, activeFilter === f && styles.filterTextActive]}>
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView contentContainerStyle={styles.list}>
        {filtered.map(exercise => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

function ExerciseCard({ exercise }: { exercise: Exercise }) {
  const difficultyColor = {
    beginner: '#059669',
    intermediate: '#D97706',
    advanced: '#DC2626',
  }[exercise.difficulty];

  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.7}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardName}>{exercise.name}</Text>
        <View style={[styles.badge, { backgroundColor: difficultyColor + '20' }]}>
          <Text style={[styles.badgeText, { color: difficultyColor }]}>
            {exercise.difficulty}
          </Text>
        </View>
      </View>

      <Text style={styles.cardDesc}>{exercise.description}</Text>

      <View style={styles.muscleRow}>
        {exercise.muscles.map(m => (
          <View key={m} style={styles.muscleTag}>
            <Text style={styles.muscleText}>{m}</Text>
          </View>
        ))}
      </View>

      <View style={styles.cardFooter}>
        <Text style={styles.target}>
          {exercise.isTimeBased
            ? `${exercise.targetDuration}s hold`
            : `${exercise.targetReps} reps`}
        </Text>
        <TouchableOpacity style={styles.startBtn}>
          <Text style={styles.startText}>Start</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A56DB',
    letterSpacing: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 2,
  },
  filterRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 8,
    marginBottom: 12,
  },
  filterBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: '#374151',
  },
  filterBtnActive: {
    backgroundColor: '#1A56DB',
    borderColor: '#1A56DB',
  },
  filterText: {
    fontSize: 12,
    color: '#6B7280',
  },
  filterTextActive: {
    color: '#ffffff',
    fontWeight: '500',
  },
  list: {
    paddingHorizontal: 20,
    paddingBottom: 32,
    gap: 12,
  },
  card: {
    backgroundColor: '#111827',
    borderRadius: 12,
    padding: 16,
    borderWidth: 0.5,
    borderColor: '#1F2937',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#F9FAFB',
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 20,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  cardDesc: {
    fontSize: 13,
    color: '#9CA3AF',
    lineHeight: 20,
    marginBottom: 10,
  },
  muscleRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 12,
  },
  muscleTag: {
    backgroundColor: '#1F2937',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
  },
  muscleText: {
    fontSize: 11,
    color: '#6B7280',
    textTransform: 'capitalize',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderTopColor: '#1F2937',
    paddingTop: 12,
  },
  target: {
    fontSize: 13,
    color: '#6B7280',
  },
  startBtn: {
    backgroundColor: '#1A56DB',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
  },
  startText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#ffffff',
  },
});