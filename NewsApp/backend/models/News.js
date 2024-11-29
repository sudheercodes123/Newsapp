const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  title: String,
  description: String,
  url: String,
  publishedAt: Date,
});

module.exports = mongoose.model("News", newsSchema);
