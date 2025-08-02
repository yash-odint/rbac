const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: String,
  password: String,
  role: {
    type: String,
    enum: ["owner", "admin", "user"],
  },
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
