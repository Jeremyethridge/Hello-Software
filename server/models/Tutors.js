const { Schema, model } = require("mongoose");

const tutorSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  skill: [String],
  rate: {
    type: Number,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please enter a valid email",
    ],
  },
});

const Tutors = model("Tutors", tutorSchema);

module.exports = Tutors;
