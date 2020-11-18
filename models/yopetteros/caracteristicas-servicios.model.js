const { model, Schema } = require("mongoose");

const caracteristicasServiciosSchema = new Schema({
  caracteristicasHospedaje: {
    type: Schema.Types.ObjectId,
    ref: 'Caracteristicas_Hospedaje',
    required: true
  },
  serviciosAdicionales: {
    type: Schema.Types.ObjectId,
    ref: 'Servicios_Adicionales',
    required: true
  }
});

module.exports = model("Caracteristicas_Servicios", caracteristicasServiciosSchema);