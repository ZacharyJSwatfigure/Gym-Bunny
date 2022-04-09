const db = require('../config/connection');
const { Workout, User } = require('../models');

const focusData = require('./focusData.json');

db.once('open', async () => {
  // clean database
  await Workout.deleteMany({});
  await User.deleteMany({});

  // bulk create each model
  const Workout = await Workout.insertMany(focusData);

  console.log('all done!');
  process.exit(0);
});