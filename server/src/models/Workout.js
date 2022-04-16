const { Schema, model } = require("mongoose");

const workoutSchema = new Schema(
  {
    exercises: [
      {
        name: {
          type: String,
          required: true,
          trim: true,
        },
        
        userId: {
          type: String,
          required: true,
          trim: true,
        },

        focusId: {
          type: String,
          required: true,
          trim: true,
        },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

module.exports = model("Workout", workoutSchema);
