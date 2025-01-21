import mongoose from "mongoose";

const grocerySchema = new mongoose.Schema({
  food: {
    type: String,
    required: true,
    brand: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  drink: {
    type: String,
    brand: String,
    validate: /^[A-Za-z0-9 ]*$/
  }
});

const Grocery = mongoose.model("Grocery", grocerySchema);

export default Grocery;
