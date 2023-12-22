const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  id: String,
  name: String,
  surname: String,
  age: Number,
});

const User = mongoose.model("users", usersSchema);

module.exports = User;
