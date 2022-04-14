const { Schema, model } = require("mongoose");

const workoutSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    exercises: [
      {
        name: {
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