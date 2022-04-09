const db = require('./connection');

const { Workout } = require('../models');

db.once('open', async () => {
    await Workout.deleteMany()
    const workouts = await Workout.insertMany(
        [
            {
                "focus": "abs",
                "workouts": [
                    "crunches",
                    "sit ups",
                    "russian Twists"
                ]
            },
            {
                "focus": "arms",
                "workouts": [
                    "Curls",
                    "Rows",
                    "bench"
                ]
            },
            {
                "focus": "back",
                "workouts": [
                    "deadlifts",
                    "pull ups",
                    "rows"
                ]
            },
            {
                "focus": "calves",
                "workouts": [
                    "leg press",
                    "cardio",
                    "jump rope"
                ]
            },
            {
                "focus": "chest",
                "workouts": [
                    "pushups",
                    "bench",
                    "plank"
                ]
            },
            {
                "focus": "legs",
                "workouts": [
                    "squats",
                    "leg press",
                    "lunges"
                ]
            },
            {
                "focus": "shoulders",
                "workouts": [
                    "shoulder press",
                    "bar bell press",
                    "dumbell pull ups"
                ]
            }
        ]
    ); 

    console.log('workout has been seeded')

})

