const mongoose = require("mongoose");

const dbConnection = (url = "mongodb://localhost:27017/NodeJs-app") => {
  try {
    mongoose
      .connect(url)
      .then(() => console.log(`sucessful Connected to DB`));
  } catch (error) {
    var db = mongoose.connection;
    //Bind connection to error event (to get notification of connection errors)
    db.on("error", console.error.bind(console, "MongoDB connection error:"));
    db.on("error", console.error.bind(console, "MongoDB connection error:"));
  }
};

module.exports = dbConnection