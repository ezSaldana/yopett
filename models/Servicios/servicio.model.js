const { model, Schema } = require("mongoose");

const servicioSchema = new Schema({
  yopettero: {
    type: Schema.Types.ObjectId,
    ref: "Yopettero",
    required: true,
  },
  cliente: {
    type: Schema.Types.ObjectId,
    ref: "Cliente",
    required: true,
  },
  // TODO: Sacar las características similares de los diferentes servicios y agregar en este schema
  numeroMascotas: {
    type: Number,
    required: [true, "El número de mascotas es obligatorio"],
  },
  express: {
    type: Boolean,
    default: false,
  },
});

module.exports = model("Servicio", servicioSchema);