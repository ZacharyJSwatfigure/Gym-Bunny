const db = require('./connection');

const { Workout } = require('../models');

db.once('open', async () => {
    await Workout.deleteMany()
    const workouts = await Workout.insertMany(
        [


            {
                "name": "Standing Calf Raises",
                "focusId": "4",
                "focus": "calves",
            },


        ]

    );

    console.log('workout has been seeded')

})

