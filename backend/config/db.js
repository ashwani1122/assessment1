const mongoose = require("mongoose");

const connectDB = async () => {
  console.log(process.env.MONGO_URI)
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected");
  } catch (err) {
    console.error("DB connection failed:", err.message);
    process.exit(1);
  }
};

module.exports = { connectDB };