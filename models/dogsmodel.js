const mongoose = require("mongoose");

const dogSchema = new mongoose.Schema({
  raca:{
    type: String,
    required: true,
    unique: true
  },
  descricao:{ type: String, required: true, unique: false },
  imagemUrl:{ type: [String], required: true, unique: false }
})

const Dog = mongoose.model("Dog", dogSchema);

module.exports = Dog;