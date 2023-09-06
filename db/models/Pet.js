import mongoose from "mongoose";

const { Schema } = mongoose;

const petSchema = new Schema({
  slug: { type: String, required: true },
  petName: { type: String, required: true },
  gender: { type: String, required: true },
  petBreed: { type: Array, required: true },
  mixed: { type: Boolean },
  petBirthday: { type: String, required: true },
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
