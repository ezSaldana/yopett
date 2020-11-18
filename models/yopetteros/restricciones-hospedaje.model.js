const { model, Schema } = require("mongoose");

const restriccionesHospedajeSchema = new Schema({
  restriccion: {
    type: String,
    required: [true, "El nombre de la restricción es un campo obligatorio"]
  },
  descripcion: {
    type: String,
    required: false
  },
  preferencias: {
    type: Schema.Types.ObjectId,
    ref: 'Restricciones_Preferencias',
    required: true
  }
});

module.exports = model("Restricciones_Hospedaje", restriccionesHospedajeSchema);