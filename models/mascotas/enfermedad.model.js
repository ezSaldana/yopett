const { model, Schema } = require("mongoose");

const enfermedadSchema = new Schema({
  nombre: {
    type: String,
    required: [true, "El nombre de la enfermedad es obligatorio"]
  },
  descripcion: {
    type: String,
    required: [true, "La descripcion de la enfermedad es obligatoria"]
  },
  contagiosa: {
    type: Boolean,
    required: [true, "Saber si la enfermedad es contagiosa es obligatorio"]
  },
  requiereMedicamentos: {
    type: Boolean,
    required: [true, "Saber si la mascota requiere medicamentos es obligatorio"]
  },
  instrucciones: {
    type: String,
    required: [true, "Las instrucciones para saber cómo tratar la enfermedad son obligatorias"]
  },
  mascota: {
    type: Schema.Types.ObjectId,
    ref: "Mascota",
    required: true
  }
});

module.exports = model("Enfermedad", enfermedadSchema);