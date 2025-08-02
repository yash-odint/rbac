const mongoose = require("mongoose");

const connection_string = process.env.DB_URL;

async function connectDb() {
  try {
    await mongoose.connect(connection_string);
    console.log("Database connected successfully");
  } catch (err) {
    console.log("Some error occured" + err);
  }
}

module.exports = connectDb;
