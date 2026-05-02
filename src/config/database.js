const mongoose = require("mongoose");

function connectToDb() {
  mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("connected to mongo db");
  });
}

module.exports = connectToDb;
