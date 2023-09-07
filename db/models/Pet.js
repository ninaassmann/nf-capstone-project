import mongoose from "mongoose";

const { Schema } = mongoose;

const petSchema = new mongoose.Schema({
  author: { type: String },
  slug: { type: String },
  petName: { type: String },
  gender: { type: String },
  petBreed: { type: Array },
  mixed: { type: Boolean },
  petBirthday: { type: String },
  vet: {
    name: { type: String },
    address: { type: String },
    phone: { type: String },
  },
  food: {
    name: { type: String },
    petAge: { type: String },
    notes: { type: String },
    type: { type: String },
    size: { type: String },
    price: { type: String },
    dailyNeed: { type: String },
    stock: { type: String },
  },
});

const Pet = mongoose.models.Pet || mongoose.model("Pet", petSchema);

export default Pet;
