const express = require("express");

const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./db/connectDB.js");
const { config } = require("dotenv");

const app = express();
app.use(express.json());
app.use(cookieParser());
config();
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

// DB Connection
connectDB();

// index endpoint
app.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: "this is an api for **Digital Business Cards**" });
});

// Routes
app.use("/endpoints", require("./routes/auth.endpoints.js")); // endpoints Route
app.use("/api/auth", require("./routes/auth.route.js")); // Authentification Route

// Not Found Endpoint
app.get("*", (req, res) => {
  res.status(404).json({ message: "Endpoint Not Found" });
});

// server listen
const PORT = process.env.PORT;
app.listen(PORT, () => console.log("Server is running on port", PORT));
