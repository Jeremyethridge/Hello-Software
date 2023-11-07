const db = require("../config/connection");

const { Tutors } = require("../models");

const tutorsData = require("./tutorsData.json");

db.once("open", async () => {
  await db.dropCollection("tutors");

  await Tutors.insertMany(tutorsData);

  console.log("Tutors seeded!");
  process.exit(0);
});
