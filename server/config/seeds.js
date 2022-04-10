const db = require('./connection');

const { Workout } = require('../models');

db.once('open', async () => {
    await Workout.deleteMany()
    const workouts = await Workout.insertMany(
        [
            {
                "focus": "abs",
                "workouts": [
                    "Crunches",
                    "Sit ups",
                    "Russian Twists",
                    "Plank hold",
                    "Farmer's Walk",
                    "Knee Raises",
                    "Side Bends",
                    "Barbell ab rollouts",
                    "Cable Crunches",
                    "Leg Raises",
                    "Side plank hold",
                    "Exercise ball pull in",
                    "Spider crawl",
                    "Cocoons",
                    "Suspended ab fall-out",
                    "Landmine twist",
                    "Dumbbell side bend",
                    "Sledgehammer swing",
                    "V-up",
                    "Standing Cable Wood Chop"
                ]
            },
            {
                "focus": "arms",
                "workouts": [
                    "Barbell bicep curl",
                    "Rows",
                    "Bench",
                    "Rickshaw Carry",
                    "Close-grip bench press",
                    "Tricep kickbacks",
                    "Standing overhead extension",
                    "Seated overhead extension",
                    "Dips",
                    "Hammer curls",
                    "Concentration curl",
                    "Cable bicep curl",
                    "Preacher Curl",
                    "Seated triceps press",
                    "Wrist Roller",
                    "Zottman Curl",
                    "Seated finger curl",
                    "Standing One-Arm Cable Curl",
                    "Bench Press - Powerlifting",
                    "Palms-Up Dumbbell Wrist Curl Over A Bench"
                ]
            },
            {
                "focus": "back",
                "workouts": [
                    "Standard deadlift",
                    "Pull ups",
                    "Bent over rows",
                    "T-bar rows",
                    "Barbell shrugs",
                    "Barbell chest supported rows",
                    "Pendley rows",
                    "Trap bar deadlift",
                    "Standing push down",
                    "Hyperextensions",
                    "Lat pulldowns - wide & narrow grip",
                    "Seated rows - wide & narrow grip",
                    "Chin-ups",
                    "Atlas Stones",
                    "Superman",
                    "Suspended row",
                    "Child's pose",
                    "Yates Row",
                    "Decline dumbbell chest fly",
                    "Back Extension - Gethin Variation"
                ]
            },
            {
                "focus": "calves",
                "workouts": [
                    "Leg press",
                    "Cardio",
                    "Jump rope",
                    "Standing Calf Raises",
                    "Seated Calf Raise",
                    "Ankle Circles",
                    "Knee Circles",
                    "Posterior Tibialis Stretch",
                    "Wall calf stretch",
                    "Balance Board",
                    "Smith Machine Calf Raise",
                    "Dumbbell walking calf raise",
                    "UNS Standing Calf Raise",
                    "Seated Calf Press - Gethin Variation",
                    "Calf Press On A Hack Squat Machine - Gethin Variation",
                    "Standing Calf Raise Facing Hack Squat Machine - Gethin Variation",
                    "Agility Ladder",
                    "Donkey Calf Raise - Gethin Variation",
                    "Peroneals Stretch",
                    "Calf SMR"
                ]
            },
            {
                "focus": "chest",
                "workouts": [
                    "Pushups",
                    "Bench",
                    "Plank",
                    "Incline barbell bench press",
                    "Guillotine 'neck' press",
                    "Incline dumbbell bench press",
                    "Dumbbell pullover",
                    "Dumbbell chest fly",
                    "Dumbbell floor press",
                    "Decline dumbbell bench press",
                    "Cable chest fly",
                    "Cable crossover",
                    "Flat machine bench press",
                    "Pec dec",
                    "Dip machine",
                    "Drop Push",
                    "Single-Arm Push-Up",
                    "Isometric Wipers",
                    "Clock push-up",
                    "Board bench press"
                ]
            },
            {
                "focus": "legs",
                "workouts": [
                    "Squats",
                    "Leg press",
                    "Lunges",
                    "Barbell back squats",
                    "Good mornings",
                    "Barbell hip thrusts",
                    "Hack squat",
                    "Goblet squat",
                    "Dumbbell step-ups",
                    "Leg extension",
                    "Leg curl",
                    "Hack squat machine",
                    "Dumbbell glute bridges",
                    "Glute ham raise-",
                    "Lying Leg Curls",
                    "Power clean",
                    "Box jump",
                    "Standing leg swing",
                    "Dumbbell Clean",
                    "Inchworm"
                ]
            },
            {
                "focus": "shoulders",
                "workouts": [
                    "Shoulder press",
                    "Bar bell press",
                    "Dumbell pull ups",
                    "Arnold press",
                    "Dumbbell lateral raises",
                    "Dumbbell front raises",
                    "Dumbbell reverse flys",
                    "Machine lat raise",
                    "Cable face pulls",
                    "Seated barbell shoulder press",
                    "Cuban press",
                    "Clean and jerk",
                    "Smith machine shrug",
                    "Power Partials",
                    "Car driver",
                    "Front Plate Raise",
                    "Handstand push-up",
                    "Standing Bradford press",
                    "Battle ropes",
                    "Alternating Kettlebell Press"
                ]
            }
        ]
    );

    console.log('workout has been seeded')

})

