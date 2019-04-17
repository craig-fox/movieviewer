const mongoose = require("mongoose");
const metadataSchema = new mongoose.Schema({
  name: String,
  value: String,
});
const contentsSchema = new mongoose.Schema({
  duration: Number,
  format: String,
  geolock: Boolean,
  height: Number,
  id: String,
  language: String,
  url: String,
  width: Number,
});
const videoSchema = new mongoose.Schema({
  availableDate: Number,
  description: String,
  metadata: [metadataSchema],
  publishedDate: Number,
  title: String,
  type: String,
});

module.exports = mongoose.model("video", videoSchema);
