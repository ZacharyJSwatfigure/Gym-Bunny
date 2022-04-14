const { Schema, model } = require("mongoose");

const exerciseSchema = new Schema(
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
  {
    toJSON: {
      virtuals: true,
    },
  }
);

module.exports = model("Exercise", exerciseSchema);
