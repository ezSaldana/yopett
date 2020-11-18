const { model, Schema } = require("mongoose");

let calificacion = {
  values: ["RECOMENDADO", "EXCELENTE", "MUY_BUENO", "BUENO", "REGULAR", "MALO", "MUY_MALO", "PESIMO", "0_RECOMENDADO"],
  message: "El valor {VALUE} no está disponible, ingrese un valor válido"
}

const calificacionSchema = new Schema({
  cliente: {
    type: Schema.Types.ObjectId,
    ref: "Cliente",
    required: true
  },
  yopettero: {
    type: Schema.Types.ObjectId,
    ref: "Yopettero",
    required: true
  },
  comentarios: {
    type: String,
    required: true,
  },
  calificacion: {
    type: Number,
    enum: calificacion
  },
  fecha: {
    type: Date,
    default: new Date(),
    required: [true, "El campo fecha de calificación es obligatorio"],
  }
});

module.exports = model("Calificacion", calificacionSchema);