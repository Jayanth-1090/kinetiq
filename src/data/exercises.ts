export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export type MuscleGroup =
  | 'quads'
  | 'glutes'
  | 'hamstrings'
  | 'chest'
  | 'shoulders'
  | 'triceps'
  | 'biceps'
  | 'core'
  | 'back'
  | 'calves'
  | 'full body';

export interface Exercise {
  id: string;
  name: string;
  difficulty: Difficulty;
  muscles: MuscleGroup[];
  description: string;
  formTips: string[];
  isTimeBased: boolean;
  targetReps?: number;
  targetDuration?: number;
}

export const EXERCISES: Exercise[] = [
  {
    id: 'squat',
    name: 'Squat',
    difficulty: 'beginner',
    muscles: ['quads', 'glutes', 'hamstrings'],
    description: 'The king of lower body exercises. Builds quad and glute strength with full range of motion.',
    formTips: [
      'Keep your chest up and back straight',
      'Drive your knees out over your toes',
      'Hit parallel or below for full depth',
      'Keep your heels flat on the ground',
    ],
    isTimeBased: false,
    targetReps: 15,
  },
  {
    id: 'pushup',
    name: 'Push-up',
    difficulty: 'beginner',
    muscles: ['chest', 'shoulders', 'triceps'],
    description: 'Upper body staple. Builds chest, shoulder and tricep strength using just your bodyweight.',
    formTips: [
      'Keep your body in a straight line head to heel',
      'Tuck your elbows at 45 degrees, not flared out',
      'Lower your chest all the way to the floor',
      'Squeeze your core throughout',
    ],
    isTimeBased: false,
    targetReps: 15,
  },
  {
    id: 'plank',
    name: 'Plank',
    difficulty: 'beginner',
    muscles: ['core', 'shoulders'],
    description: 'The ultimate core stability exercise. Builds deep core strength and full body tension.',
    formTips: [
      'Keep your hips level — no sagging or piking',
      'Stack your shoulders directly over your wrists',
      'Keep your neck neutral, eyes looking down',
      'Breathe steadily throughout the hold',
    ],
    isTimeBased: true,
    targetDuration: 60,
  },
  {
    id: 'lunge',
    name: 'Lunge',
    difficulty: 'beginner',
    muscles: ['quads', 'glutes', 'hamstrings'],
    description: 'Single leg movement that builds balance, coordination and lower body strength.',
    formTips: [
      'Keep your torso upright throughout',
      'Front knee tracks over your second toe',
      'Lower your back knee close to the floor',
      'Push through your front heel to stand',
    ],
    isTimeBased: false,
    targetReps: 12,
  },
  {
    id: 'glute_bridge',
    name: 'Glute Bridge',
    difficulty: 'beginner',
    muscles: ['glutes', 'hamstrings', 'core'],
    description: 'Isolated glute activation. Perfect for building posterior chain strength from the floor.',
    formTips: [
      'Drive through your heels not your toes',
      'Squeeze your glutes hard at the top',
      'Keep your core braced throughout',
      'Avoid overarching your lower back',
    ],
    isTimeBased: false,
    targetReps: 15,
  },
  {
    id: 'mountain_climber',
    name: 'Mountain Climber',
    difficulty: 'intermediate',
    muscles: ['core', 'shoulders', 'quads'],
    description: 'Dynamic full body movement combining core stability with cardio conditioning.',
    formTips: [
      'Keep your hips level with your shoulders',
      'Drive your knees powerfully toward your chest',
      'Keep your arms locked straight',
      'Maintain a fast controlled pace',
    ],
    isTimeBased: false,
    targetReps: 20,
  },
  {
    id: 'shoulder_press',
    name: 'Shoulder Press',
    difficulty: 'intermediate',
    muscles: ['shoulders', 'triceps'],
    description: 'Overhead pressing movement for building shoulder strength and stability.',
    formTips: [
      'Keep your core tight to protect your lower back',
      'Drive the weight directly overhead',
      'Lock out fully at the top',
      'Avoid flaring your elbows wide',
    ],
    isTimeBased: false,
    targetReps: 12,
  },
  {
    id: 'bicep_curl',
    name: 'Bicep Curl',
    difficulty: 'intermediate',
    muscles: ['biceps'],
    description: 'Classic arm curl for building bicep size and strength.',
    formTips: [
      'Keep your elbows pinned to your sides',
      'Full range of motion — all the way up and down',
      'No swinging — strict form only',
      'Squeeze hard at the top of each rep',
    ],
    isTimeBased: false,
    targetReps: 12,
  },
  {
    id: 'tricep_dip',
    name: 'Tricep Dip',
    difficulty: 'intermediate',
    muscles: ['triceps', 'shoulders'],
    description: 'Bodyweight tricep isolation using a chair or bench.',
    formTips: [
      'Keep your back close to the surface',
      'Lower until your elbows hit 90 degrees',
      'Push through your palms to lock out',
      'Keep your shoulders depressed — no shrugging',
    ],
    isTimeBased: false,
    targetReps: 12,
  },
  {
    id: 'deadlift',
    name: 'Bodyweight Deadlift',
    difficulty: 'intermediate',
    muscles: ['hamstrings', 'glutes', 'back'],
    description: 'Hip hinge pattern that builds posterior chain strength and body awareness.',
    formTips: [
      'Hinge at your hips — not your waist',
      'Keep your back flat throughout',
      'Push your hips back as far as possible',
      'Squeeze your glutes to stand tall',
    ],
    isTimeBased: false,
    targetReps: 12,
  },
  {
    id: 'burpee',
    name: 'Burpee',
    difficulty: 'advanced',
    muscles: ['full body'],
    description: 'The ultimate full body conditioning exercise. Combines strength and cardio in one brutal movement.',
    formTips: [
      'Land softly on your feet from the jump',
      'Keep your plank position tight at the bottom',
      'Explode up through every rep',
      'Maintain consistent pace over speed',
    ],
    isTimeBased: false,
    targetReps: 10,
  },
  {
    id: 'jump_squat',
    name: 'Jump Squat',
    difficulty: 'advanced',
    muscles: ['quads', 'glutes', 'calves'],
    description: 'Explosive lower body power movement. Builds fast twitch muscle and athletic strength.',
    formTips: [
      'Hit full squat depth before jumping',
      'Swing your arms to help drive the jump',
      'Land softly with bent knees',
      'Go straight into the next rep on landing',
    ],
    isTimeBased: false,
    targetReps: 10,
  },
];