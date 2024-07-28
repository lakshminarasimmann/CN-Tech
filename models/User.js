const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  weight: { type: Number, required: true },
  height: { type: Number, required: true },
  dietaryPreferences: { type: String, required: true },
  fitnessGoals: { type: String, required: true }
});

module.exports = mongoose.model('User', UserSchema);
