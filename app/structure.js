const mongoose = require("mongoose");
const Schema = mongoose.Schema(
  {
    task: String,
    who: String,
    due: Date,
    done: {
      type: String,
      enum: ["DONE", "PENDING", "FAILED"],
      default: "PENDING",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", Schema);
