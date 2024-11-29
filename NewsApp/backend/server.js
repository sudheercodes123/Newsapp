const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const newsRoutes = require("./routes/newsRoutes");
const connectDB = require("./config/db");
const cors = require("cors");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ newsBackend: "Working" });
});

app.use("/api/news", newsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
