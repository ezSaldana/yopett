const { model, Schema } = require("mongoose");

const exoticaSchema = new Schema({
  mascota: {
    type: Schema.Types.ObjectId,
    ref: "Mascota",
    required: true,
  },
  tipoMascota: {
    // Qué mascota es
    type: String,
    required: [true, "El tipo de mascota es obligatorio"],
  },
  cuidados: {
    // Cómo se cuida
    type: String,
    required: [true, "El campo cuidado es obligatorio"],
  },
  especificaciones: {
    // Que se necesita para cuidarla
    type: String,
    required: [true, "Las especificaciones son obligatorias"],
  }
});

module.exports = model("Exotica", exoticaSchema);