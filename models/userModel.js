const mongoose = require("mongoose");

//create user model with mongoose
const userSchema =  mongoose.Schema({
  nom: { type: String, default: null },
  prenoms: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String },
  token: { type: String },
});

//export user model
module.exports = mongoose.model("User", userSchema);