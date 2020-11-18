const { model, Schema } = require("mongoose");

const disponibilidadSchema = new Schema({
  fechasDescanso: [{
    fechaInicio: {
      type: Date,
      required: false
    },
    fechaFin: {
      type: Date,
      required: false
    }
  }]
});

module.exports = model("Disponibilidad", disponibilidadSchema);