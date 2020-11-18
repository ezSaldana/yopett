const { model, Schema } = require("mongoose");

const restrccionesPreferenciasSchema = new Schema({
  preferenciasHospedaje: {
    type: Schema.Types.ObjectId,
    ref: 'Preferencias_Hospedaje',
    required: true
  },
  restriccionesHospedaje: {
    type: Schema.Types.ObjectId,
    ref: 'Restricciones_Hospedaje',
    required: true
  }
});

module.exports = model("Restricciones_Preferencias", restrccionesPreferenciasSchema);