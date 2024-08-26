const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Car Name is required!"],
  },
  description: {
    type: String,
  },
  transmission: {
    type: String,
  },
  fuel: {
    type: String,
  },
  model: {
    type: String,
  },
  price: {
    type: String,
  },
  location: {
    type: Number,
  },
  imageData: {
    type: Buffer, // Store image data as Buffer
  },
});

module.exports = mongoose.model("Car", carSchema);
