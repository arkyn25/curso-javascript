const mongoose = require("mongoose");

const HomeModeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const HomeModel = mongoose.model("HomeMode", HomeModeSchema);

module.exports = HomeModel;
