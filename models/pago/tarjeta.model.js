const { model, Schema } = require("mongoose");

const tarjetaSchema = new Schema({
  pago: {
    type: Schema.Types.ObjectId,
    ref: "Pago",
    required: true
  },
  titular: {
    type: String,
    required: [true, "El titular de la tarjeta es un campo obligatorio"],
  },
  numero: {
    type: String,
    required: [true, "El número de la tarjeta es obligatorio"],
  },
  mesExp: {
    type: String,
    required: [true, "El mes de expiración es obligatorio"],
  },
  anioExp: {
    type: String,
    required: [true, "El año de expiración es obligatorio"],
  }
});

module.exports = model("Tarjeta", tarjetaSchema);