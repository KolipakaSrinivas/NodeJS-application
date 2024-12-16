const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    first_name: { type: String },
    last_name: { type: String },
    email: { type: String, unique: true },
    gender: { type: String },
    job_title: { type: String }
  },
  { timeStamp: true }
);

const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;
