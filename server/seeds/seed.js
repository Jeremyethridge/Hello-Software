const db = require("../config/connection");
const cleanDB = require("./cleanDB");
const { Tutors } = require("../models");

const tutorsData = require("./tutorsData.json");

db.once("open", async () => {
  await cleanDB("Tutors", "Project3DB");

  await Tutors.insertMany(tutorsData);

  console.log("Tutors seeded!");
  process.exit(0);
});
