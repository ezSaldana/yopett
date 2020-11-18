const { Schema, model } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const paisSchema = new Schema({
  pais: {
    type: String,
    unique: true,
    required: [true, "El país es obligatorio"]
  },
  codigoPais: {
    type: String,
    unique: true,
    required: [true, "El código del país es obligatorio"]
  }
});

paisSchema.plugin(uniqueValidator, "Este {PATH} ya está registrado, ingrese uno diferente");

module.exports = model("Pais", paisSchema);