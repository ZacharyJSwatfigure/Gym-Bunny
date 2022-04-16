const db = require("./connection");

const { Exercise } = require("../models");

db.once("open", async () => {
  await Exercise.deleteMany();
  const exercises = await Exercise.insertMany([
    {
      name: "Crunches",
      focusId: "1",
    },
    {
      name: "Sit ups",
      focusId: "1",
    },
    {
      name: "Russian Twists",
      focusId: "1",
    },
    {
      name: "Plank hold",
      focusId: "1",
    },
    {
      name: "Farmer's Walk",
      focusId: "1",
    },
    {
      name: "Knee Raises",
      focusId: "1",
    },
    {
      name: "Side Bends",
      focusId: "1",
    },
    {
      name: "Barbell ab rollouts",
      focusId: "1",
    },
    {
      name: "Cable Crunches",
      focusId: "1",
    },
    {
      name: "Leg Raises",
      focusId: "1",
    },
    {
      name: "Side plank hold",
      focusId: "1",
    },
    {
      name: "Exercise ball pull in",
      focusId: "1",
    },
    {
      name: "Spider crawl",
      focusId: "1",
    },
    {
      name: "Cocoons",
      focusId: "1",
    },
    {
      name: "Suspended ab fall-out",
      focusId: "1",
    },
    {
      name: "Landmine twist",
      focusId: "1",
    },
    {
      name: "Dumbbell side bend",
      focusId: "1",
    },
    {
      name: "Sledgehammer swing",
      focusId: "1",
    },
    {
      name: "V-up",
      focusId: "1",
    },
    {
      name: "Standing Cable Wood Chop",
      focusId: "1",
    },
    {
      name: "Barbell bicep curl",
      focusId: "2",
    },
    {
      name: "Rows",
      focusId: "2",
    },
    {
      name: "Bench",
      focusId: "2",
    },
    {
      name: "Rickshaw Carry",
      focusId: "2",
    },
    {
      name: "Close-grip bench press",
      focusId: "2",
    },
    {
      name: "Tricep kick backs",
      focusId: "2",
    },
    {
      name: "Standing overhead extension",
      focusId: "2",
    },
    {
      name: "Seated overhead extension",
      focusId: "2",
    },
    {
      name: "Dips",
      focusId: "2",
    },
    {
      name: "Hammer curls",
      focusId: "2",
    },
    {
      name: "Concentration curl",
      focusId: "2",
    },
    {
      name: "Cable bicep curl",
      focusId: "2",
    },
    {
      name: "Preacher Curl",
      focusId: "2",
    },
    {
      name: "Seated triceps press",
      focusId: "2",
    },
    {
      name: "Wrist Roller",
      focusId: "2",
    },
    {
      name: "Zottman Curl",
      focusId: "2",
    },
    {
      name: "Seated finger curl",
      focusId: "2",
    },
    {
      name: "Standing One-Arm Cable Curl",
      focusId: "2",
    },
    {
      name: "Bench Press - Powerlifting",
      focusId: "2",
    },
    {
      name: "Palms-Up Dumbbell Wrist Curl Over A Bench",
      focusId: "2",
    },
    {
      name: "Standard deadlift",
      focusId: "3",
    },
    {
      name: "Pull ups",
      focusId: "3",
    },
    {
      name: "Bent over rows",
      focusId: "3",
    },
    {
      name: "T-bar rows",
      focusId: "3",
    },
    {
      name: "Barbell shrugs",
      focusId: "3",
    },
    {
      name: "Barbell chest supported rows",
      focusId: "3",
    },
    {
      name: "Pendley rows",
      focusId: "3",
    },
    {
      name: "Trap bar deadlift",
      focusId: "3",
    },
    {
      name: "Standing push down",
      focusId: "3",
    },
    {
      name: "Hyperextensions",
      focusId: "3",
    },
    {
      name: "Lat pulldowns - wide & narrow grip",
      focusId: "3",
    },
    {
      name: "Seated rows - wide & narrow grip",
      focusId: "3",
    },
    {
      name: "Chin-ups",
      focusId: "3",
    },
    {
      name: "Atlas Stones",
      focusId: "3",
    },
    {
      name: "Superman",
      focusId: "3",
    },
    {
      name: "Suspended row",
      focusId: "3",
    },
    {
      name: "Child's pose",
      focusId: "3",
    },
    {
      name: "Yates Row",
      focusId: "3",
    },
    {
      name: "Decline dumbbell chest fly",
      focusId: "3",
    },
    {
      name: "Back Extension - Gethin Variation",
      focusId: "3",
    },
    {
      name: "Leg press",
      focusId: "4",
    },
    {
      name: "Cardio",
      focusId: "4",
    },
    {
      name: "Jump rope",
      focusId: "4",
    },
    {
      name: "Standing Calf Raises",
      focusId: "4",
    },
    {
      name: "Seated Calf Raise",
      focusId: "4",
    },
    {
      name: "Ankle Circles",
      focusId: "4",
    },
    {
      name: "Knee Circles",
      focusId: "4",
    },
    {
      name: "Posterior Tibialis Stretch",
      focusId: "4",
    },
    {
      name: "Wall calf stretch",
      focusId: "4",
    },
    {
      name: "Balance Board",
      focusId: "4",
    },
    {
      name: "Smith Machine Calf Raise",
      focusId: "4",
    },
    {
      name: "Dumbbell walking calf raise",
      focusId: "4",
    },
    {
      name: "UNS Standing Calf Raise",
      focusId: "4",
    },
    {
      name: "Seated Calf Press - Gethin Variation",
      focusId: "4",
    },
    {
      name: "Calf Press On A Hack Squat Machine - Gethin Variation",
      focusId: "4",
    },
    {
      name: "Agility Ladder",
      focusId: "4",
    },
    {
      name: "Standing Calf Raise Facing Hack Squat Machine - Gethin Variation",
      focusId: "4",
    },
    {
      name: "Peroneals Stretch",
      focusId: "4",
    },
    {
      name: "Calf SMR",
      focusId: "4",
    },
    {
      name: "Pushups",
      focusId: "5",
    },
    {
      name: "Bench",
      focusId: "5",
    },
    {
      name: "Plank",
      focusId: "5",
    },
    {
      name: "Incline barbell bench press",
      focusId: "5",
    },
    {
      name: "Guillotine 'neck' press",
      focusId: "5",
    },
    {
      name: "Incline dumbbell bench press",
      focusId: "5",
    },
    {
      name: "Dumbbell pullover",
      focusId: "5",
    },
    {
      name: "Dumbbell chest fly",
      focusId: "5",
    },
    {
      name: "Dumbbell floor press",
      focusId: "5",
    },
    {
      name: "Decline dumbbell bench press",
      focusId: "5",
    },
    {
      name: "Cable chest fly",
      focusId: "5",
    },
    {
      name: "Cable crossover",
      focusId: "5",
    },
    {
      name: "Flat machine bench press",
      focusId: "5",
    },
    {
      name: "Pec dec",
      focusId: "5",
    },
    {
      name: "Dip machine",
      focusId: "5",
    },
    {
      name: "Drop Push",
      focusId: "5",
    },
    {
      name: "Single-Arm Push-Up",
      focusId: "5",
    },
    {
      name: "Isometric Wipers",
      focusId: "5",
    },
    {
      name: "Clock push-up",
      focusId: "5",
    },
    {
      name: "Board bench press",
      focusId: "5",
    },
    {
      name: "Squats",
      focusId: "6",
    },
    {
      name: "Leg press",
      focusId: "6",
    },
    {
      name: "Lunges",
      focusId: "6",
    },
    {
      name: "Barbell back squats",
      focusId: "6",
    },
    {
      name: "Good mornings",
      focusId: "6",
    },
    {
      name: "Barbell hip thrusts",
      focusId: "6",
    },
    {
      name: "Hack squat",
      focusId: "6",
    },
    {
      name: "Goblet squat",
      focusId: "6",
    },
    {
      name: "Dumbbell step-ups",
      focusId: "6",
    },
    {
      name: "Leg extension",
      focusId: "6",
    },
    {
      name: "Leg curl",
      focusId: "6",
    },
    {
      name: "Hack squat machine",
      focusId: "6",
    },
    {
      name: "Dumbbell glute bridges",
      focusId: "6",
    },
    {
      name: "Glute ham raise-",
      focusId: "6",
    },
    {
      name: "Lying Leg Curls",
      focusId: "6",
    },
    {
      name: "Power clean",
      focusId: "6",
    },
    {
      name: "Box jump",
      focusId: "6",
    },
    {
      name: "Standing leg swing",
      focusId: "6",
    },
    {
      name: "Dumbbell Clean",
      focusId: "6",
    },
    {
      name: "Inchworm",
      focusId: "6",
    },
    {
      name: "Shoulder press",
      focusId: "7",
    },
    {
      name: "Bar bell press",
      focusId: "7",
    },
    {
      name: "Dumbell pull ups",
      focusId: "7",
    },
    {
      name: "Arnold press",
      focusId: "7",
    },
    {
      name: "Dumbbell lateral raises",
      focusId: "7",
    },
    {
      name: "Dumbbell front raises",
      focusId: "7",
    },
    {
      name: "Dumbbell reverse flys",
      focusId: "7",
    },
    {
      name: "Machine lat raise",
      focusId: "7",
    },
    {
      name: "Cable face pulls",
      focusId: "7",
    },
    {
      name: "Seated barbell shoulder press",
      focusId: "7",
    },
    {
      name: "Cuban press",
      focusId: "7",
    },
    {
      name: "Clean and jerk",
      focusId: "7",
    },
    {
      name: "Smith machine shrug",
      focusId: "7",
    },
    {
      name: "Power Partials",
      focusId: "7",
    },
    {
      name: "Battle ropes",
      focusId: "7",
    },
    {
      name: "Standing Bradford press",
      focusId: "7",
    },
    {
      name: "Handstand push-up",
      focusId: "7",
    },
    {
      name: "Front Plate Raise",
      focusId: "7",
    },
    {
      name: "Car driver",
      focusId: "7",
    },
    {
      name: "Alternating Kettlebell Press",
      focusId: "7",
    },
  ]);

  console.log("exercise has been seeded");

});
