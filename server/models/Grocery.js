import mongoose from "mongoose";

const grocerySchema = new mongoose.Schema({
  food: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },

  drink: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },

  brand: {
    type: String,
    required: true
  }
});

const Grocery = mongoose.model("Grocery", grocerySchema);

export default Grocery;
