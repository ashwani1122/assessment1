const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ashwanisingh:HNhIbHhzrTcQUuv7@cluster0.vk9uv.mongodb.net/?appName=Cluster0"


    );
    console.log("DB connected");
  } catch (err) {
    console.error("DB connection failed:", err.message);
    process.exit(1);
  }
};

module.exports = { connectDB };