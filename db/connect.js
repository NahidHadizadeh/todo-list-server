const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
function connectDB(URI) {
  return mongoose.connect(URI);
}
module.exports = connectDB;
