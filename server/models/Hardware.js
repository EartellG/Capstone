import mongoose from "mongoose";

const hardwareSchema = new mongoose.Schema({
  handtool: {
    type: String,
    required: true,
    brand: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  powertool: {
    type: String,
    required: true,
    brand: String,
    validate: /^[A-Za-z0-9 ]*$/
  }
});

const Hardware = mongoose.model("Hardware");

export default Hardware;
