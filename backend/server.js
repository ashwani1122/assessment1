const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']); // fix DNS issue

const path = require("path");
const express = require('express');
const cors = require('cors');
require('dotenv').config(); // ✅ correct dotenv usage

const { connectDB } = require('./config/db.js');
const userRouter = require('./routes/userRoute.js');
const foodRouter = require('./routes/foodRoute.js');
const cartRouter = require('./routes/cartRoute.js');
const orderRouter = require('./routes/orderRoute.js');

// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// DB connection
connectDB();

// ✅ serve images (ONLY ONCE)
app.use("/images", express.static(path.join(__dirname, "uploads")));

// api routes
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// test route
app.get("/", (req, res) => {
    res.send("API working");
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});