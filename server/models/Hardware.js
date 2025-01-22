import mongoose from "mongoose";

const hardwareSchema = new mongoose.Schema({
  tooltype: {
    type: String,
    required: true
    // validate: /^[A-Za-z0-9 ]*$/
  },
  brand: {
    type: String,
    required: true
  }
});

const Hardware = mongoose.model("Hardware", hardwareSchema);

export default Hardware;
