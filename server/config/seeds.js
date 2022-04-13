const db = require("./connection");

const { Workout } = require("../models");

db.once("open", async () => {
  await Workout.deleteMany();
  const workouts = await Workout.insertMany([
    {
      name: "Crunches",
      focusId: "1",
      userId: null,
    },
    {
      name: "Sit ups",
      focusId: "1",
      userId: null,
    },
    {
      name: "Russian Twists",
      focusId: "1",
      userId: null,
    },
    {
      name: "Plank hold",
      focusId: "1",
      userId: null,
    },
    {
      name: "Farmer's Walk",
      focusId: "1",
      userId: null,
    },
    {
      name: "Knee Raises",
      focusId: "1",
      userId: null,
    },
    {
      name: "Side Bends",
      focusId: "1",
      userId: null,
    },
    {
      name: "Barbell ab rollouts",
      focusId: "1",
      userId: null,
    },
    {
      name: "Cable Crunches",
      focusId: "1",
      userId: null,
    },
    {
      name: "Leg Raises",
      focusId: "1",
      userId: null,
    },
    {
      name: "Side plank hold",
      focusId: "1",
      userId: null,
    },
    {
      name: "Exercise ball pull in",
      focusId: "1",
      userId: null,
    },
    {
      name: "Spider crawl",
      focusId: "1",
      userId: null,
    },
    {
      name: "Cocoons",
      focusId: "1",
      userId: null,
    },
    {
      name: "Suspended ab fall-out",
      focusId: "1",
      userId: null,
    },
    {
      name: "Landmine twist",
      focusId: "1",
      userId: null,
    },
    {
      name: "Dumbbell side bend",
      focusId: "1",
      userId: null,
    },
    {
      name: "Sledgehammer swing",
      focusId: "1",
      userId: null,
    },
    {
      name: "V-up",
      focusId: "1",
      userId: null,
    },
    {
      name: "Standing Cable Wood Chop",
      focusId: "1",
      userId: null,
    },
    {
      name: "Barbell bicep curl",
      focusId: "2",
      userId: null,
    },
    {
      name: "Rows",
      focusId: "2",
      userId: null,
    },
    {
      name: "Bench",
      focusId: "2",
      userId: null,
    },
    {
      name: "Rickshaw Carry",
      focusId: "2",
      userId: null,
    },
    {
      name: "Close-grip bench press",
      focusId: "2",
      userId: null,
    },
    {
      name: "Tricep kick backs",
      focusId: "2",
      userId: null,
    },
    {
      name: "Standing overhead extension",
      focusId: "2",
      userId: null,
    },
    {
      name: "Seated overhead extension",
      focusId: "2",
      userId: null,
    },
    {
      name: "Dips",
      focusId: "2",
      userId: null,
    },
    {
      name: "Hammer curls",
      focusId: "2",
      userId: null,
    },
    {
      name: "Concentration curl",
      focusId: "2",
      userId: null,
    },
    {
      name: "Cable bicep curl",
      focusId: "2",
      userId: null,
    },
    {
      name: "Preacher Curl",
      focusId: "2",
      userId: null,
    },
    {
      name: "Seated triceps press",
      focusId: "2",
      userId: null,
    },
    {
      name: "Wrist Roller",
      focusId: "2",
      userId: null,
    },
    {
      name: "Zottman Curl",
      focusId: "2",
      userId: null,
    },
    {
      name: "Seated finger curl",
      focusId: "2",
      userId: null,
    },
    {
      name: "Standing One-Arm Cable Curl",
      focusId: "2",
      userId: null,
    },
    {
      name: "Bench Press - Powerlifting",
      focusId: "2",
      userId: null,
    },
    {
      name: "Palms-Up Dumbbell Wrist Curl Over A Bench",
      focusId: "2",
      userId: null,
    },
    {
      name: "Standard deadlift",
      focusId: "3",
      userId: null,
    },
    {
      name: "Pull ups",
      focusId: "3",
      userId: null,
    },
    {
      name: "Bent over rows",
      focusId: "3",
      userId: null,
    },
    {
      name: "T-bar rows",
      focusId: "3",
      userId: null,
    },
    {
      name: "Barbell shrugs",
      focusId: "3",
      userId: null,
    },
    {
      name: "Barbell chest supported rows",
      focusId: "3",
      userId: null,
    },
    {
      name: "Pendley rows",
      focusId: "3",
      userId: null,
    },
    {
      name: "Trap bar deadlift",
      focusId: "3",
      userId: null,
    },
    {
      name: "Standing push down",
      focusId: "3",
      userId: null,
    },
    {
      name: "Hyperextensions",
      focusId: "3",
      userId: null,
    },
    {
      name: "Lat pulldowns - wide & narrow grip",
      focusId: "3",
      userId: null,
    },
    {
      name: "Seated rows - wide & narrow grip",
      focusId: "3",
      userId: null,
    },
    {
      name: "Chin-ups",
      focusId: "3",
      userId: null,
    },
    {
      name: "Atlas Stones",
      focusId: "3",
      userId: null,
    },
    {
      name: "Superman",
      focusId: "3",
      userId: null,
    },
    {
      name: "Suspended row",
      focusId: "3",
      userId: null,
    },
    {
      name: "Child's pose",
      focusId: "3",
      userId: null,
    },
    {
      name: "Yates Row",
      focusId: "3",
      userId: null,
    },
    {
      name: "Decline dumbbell chest fly",
      focusId: "3",
      userId: null,
    },
    {
      name: "Back Extension - Gethin Variation",
      focusId: "3",
      userId: null,
    },
    {
      name: "Leg press",
      focusId: "4",
      userId: null,
    },
    {
      name: "Cardio",
      focusId: "4",
      userId: null,
    },
    {
      name: "Jump rope",
      focusId: "4",
      userId: null,
    },
    {
      name: "Standing Calf Raises",
      focusId: "4",
      userId: null,
    },
    {
      name: "Seated Calf Raise",
      focusId: "4",
      userId: null,
    },
    {
      name: "Ankle Circles",
      focusId: "4",
      userId: null,
    },
    {
      name: "Knee Circles",
      focusId: "4",
      userId: null,
    },
    {
      name: "Posterior Tibialis Stretch",
      focusId: "4",
      userId: null,
    },
    {
      name: "Wall calf stretch",
      focusId: "4",
      userId: null,
    },
    {
      name: "Balance Board",
      focusId: "4",
      userId: null,
    },
    {
      name: "Smith Machine Calf Raise",
      focusId: "4",
      userId: null,
    },
    {
      name: "Dumbbell walking calf raise",
      focusId: "4",
      userId: null,
    },
    {
      name: "UNS Standing Calf Raise",
      focusId: "4",
      userId: null,
    },
    {
      name: "Seated Calf Press - Gethin Variation",
      focusId: "4",
      userId: null,
    },
    {
      name: "Calf Press On A Hack Squat Machine - Gethin Variation",
      focusId: "4",
      userId: null,
    },
    {
      name: "Agility Ladder",
      focusId: "4",
      userId: null,
    },
    {
      name: "Standing Calf Raise Facing Hack Squat Machine - Gethin Variation",
      focusId: "4",
      userId: null,
    },
    {
      name: "Peroneals Stretch",
      focusId: "4",
      userId: null,
    },
    {
      name: "Calf SMR",
      focusId: "4",
      userId: null,
    },
    {
      name: "Pushups",
      focusId: "5",
      userId: null,
    },
    {
      name: "Bench",
      focusId: "5",
      userId: null,
    },
    {
      name: "Plank",
      focusId: "5",
      userId: null,
    },
    {
      name: "Incline barbell bench press",
      focusId: "5",
      userId: null,
    },
    {
      name: "Guillotine 'neck' press",
      focusId: "5",
      userId: null,
    },
    {
      name: "Incline dumbbell bench press",
      focusId: "5",
      userId: null,
    },
    {
      name: "Dumbbell pullover",
      focusId: "5",
      userId: null,
    },
    {
      name: "Dumbbell chest fly",
      focusId: "5",
      userId: null,
    },
    {
      name: "Dumbbell floor press",
      focusId: "5",
      userId: null,
    },
    {
      name: "Decline dumbbell bench press",
      focusId: "5",
      userId: null,
    },
    {
      name: "Cable chest fly",
      focusId: "5",
      userId: null,
    },
    {
      name: "Cable crossover",
      focusId: "5",
      userId: null,
    },
    {
      name: "Flat machine bench press",
      focusId: "5",
      userId: null,
    },
    {
      name: "Pec dec",
      focusId: "5",
      userId: null,
    },
    {
      name: "Dip machine",
      focusId: "5",
      userId: null,
    },
    {
      name: "Drop Push",
      focusId: "5",
      userId: null,
    },
    {
      name: "Single-Arm Push-Up",
      focusId: "5",
      userId: null,
    },
    {
      name: "Isometric Wipers",
      focusId: "5",
      userId: null,
    },
    {
      name: "Clock push-up",
      focusId: "5",
      userId: null,
    },
    {
      name: "Board bench press",
      focusId: "5",
      userId: null,
    },
    {
      name: "Squats",
      focusId: "6",
      userId: null,
    },
    {
      name: "Leg press",
      focusId: "6",
      userId: null,
    },
    {
      name: "Lunges",
      focusId: "6",
      userId: null,
    },
    {
      name: "Barbell back squats",
      focusId: "6",
      userId: null,
    },
    {
      name: "Good mornings",
      focusId: "6",
      userId: null,
    },
    {
      name: "Barbell hip thrusts",
      focusId: "6",
      userId: null,
    },
    {
      name: "Hack squat",
      focusId: "6",
      userId: null,
    },
    {
      name: "Goblet squat",
      focusId: "6",
      userId: null,
    },
    {
      name: "Dumbbell step-ups",
      focusId: "6",
      userId: null,
    },
    {
      name: "Leg extension",
      focusId: "6",
      userId: null,
    },
    {
      name: "Leg curl",
      focusId: "6",
      userId: null,
    },
    {
      name: "Hack squat machine",
      focusId: "6",
      userId: null,
    },
    {
      name: "Dumbbell glute bridges",
      focusId: "6",
      userId: null,
    },
    {
      name: "Glute ham raise-",
      focusId: "6",
      userId: null,
    },
    {
      name: "Lying Leg Curls",
      focusId: "6",
      userId: null,
    },
    {
      name: "Power clean",
      focusId: "6",
      userId: null,
    },
    {
      name: "Box jump",
      focusId: "6",
      userId: null,
    },
    {
      name: "Standing leg swing",
      focusId: "6",
      userId: null,
    },
    {
      name: "Dumbbell Clean",
      focusId: "6",
      userId: null,
    },
    {
      name: "Inchworm",
      focusId: "6",
      userId: null,
    },
    {
      name: "Shoulder press",
      focusId: "7",
      userId: null,
    },
    {
      name: "Bar bell press",
      focusId: "7",
      userId: null,
    },
    {
      name: "Dumbell pull ups",
      focusId: "7",
      userId: null,
    },
    {
      name: "Arnold press",
      focusId: "7",
      userId: null,
    },
    {
      name: "Dumbbell lateral raises",
      focusId: "7",
      userId: null,
    },
    {
      name: "Dumbbell front raises",
      focusId: "7",
      userId: null,
    },
    {
      name: "Dumbbell reverse flys",
      focusId: "7",
      userId: null,
    },
    {
      name: "Machine lat raise",
      focusId: "7",
      userId: null,
    },
    {
      name: "Cable face pulls",
      focusId: "7",
      userId: null,
    },
    {
      name: "Seated barbell shoulder press",
      focusId: "7",
      userId: null,
    },
    {
      name: "Cuban press",
      focusId: "7",
      userId: null,
    },
    {
      name: "Clean and jerk",
      focusId: "7",
      userId: null,
    },
    {
      name: "Smith machine shrug",
      focusId: "7",
      userId: null,
    },
    {
      name: "Power Partials",
      focusId: "7",
      userId: null,
    },
    {
      name: "Battle ropes",
      focusId: "7",
      userId: null,
    },
    {
      name: "Standing Bradford press",
      focusId: "7",
      userId: null,
    },
    {
      name: "Handstand push-up",
      focusId: "7",
      userId: null,
    },
    {
      name: "Front Plate Raise",
      focusId: "7",
      userId: null,
    },
    {
      name: "Car driver",
      focusId: "7",
      userId: null,
    },
    {
      name: "Alternating Kettlebell Press",
      focusId: "7",
      userId: null,
    },
  ]);

  console.log("workout has been seeded");
});
