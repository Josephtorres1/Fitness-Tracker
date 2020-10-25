const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workoutLog = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "select type",
      },
      name: {
        type: String,
        trim: true,
        required: "Enter a exercise name",
      },
      distance: {
        type: Number,
        trim: true,
        required: "Enter a distance value",
      },
      duration: {
        type: Number,
        trim: true,
        required: "Enter a duration value",
      },
      weight: {
        type: Number,
        trim: true,
        required: "Enter a weight value",
      },
      sets: {
        type: Number,
        trim: true,
        required: "Enter a value",
      },
      reps: {
        type: Number,
        trim: true,
        required: "Enter a value",
      },
    },
  ],
  totalDuration: {
    type: Number,
    trim: true,
    default: 0,
  },
});
const Workout = mongoose.model("Workout", workoutLog);
module.exports = Workout;
