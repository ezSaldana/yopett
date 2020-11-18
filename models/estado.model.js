const { Schema, model } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const estadoSchema = new Schema({
  estado: {
    type: String,
    unique: true,
    required: [true, "El estado es obligatorio"]
  },
  codigoEstado: {
    type: String,
    required: false
  },
  pais: {
    type: Schema.Types.ObjectId,
    ref: "Pais",
    required: true
  }
});

paisSchema.plugin(uniqueValidator, "Este {PATH} ya está registrado, ingrese uno diferente");

module.exports = model("Estado", estadoSchema);