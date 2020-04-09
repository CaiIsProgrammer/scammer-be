const mongoose = require("mongoose");
const location = mongoose.model(
  "location",
  new mongoose.Schema({
    long: {
      type: String,
    },
    lat: {
      type: String
    },

  })
);

exports.Allset = location;
