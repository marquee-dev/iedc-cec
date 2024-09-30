const mongoose = require("mongoose");

const ideaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    required: true,
  },
  idea: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Idea = mongoose.model("Idea", ideaSchema);

module.exports = Idea;
