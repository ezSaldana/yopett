const { Schema, model } = require("mongoose");

const ubicacionSchema = new Schema({
  ciudad: {
    type: Schema.Types.ObjectId,
    ref: "Ciudad",
    required: true
  },
  codigoPostal: {
    type: String,
    required: [true, "EL código postal es obligatorio"]
  },
  colonia: {
    type: String,
    required: [true, "La colonia es obligatoria"]
  },
  calle: {
    type: String,
    required: [true, "La calle es obligatoria"]
  },
  numInt: {
    type: String,
    required: false
  },
  numExt: {
    type: String,
    required: [true, "El número exterior es obligatorio"]
  },
  comentarios: {
    type: String,
    required: false
  }
});

module.exports = model("Ubicacion", ubicacionSchema);