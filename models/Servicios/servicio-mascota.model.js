const { model, Schema } = require("mongoose");
// TODO: verificar este esquema más a fondo
const servicioMascotaSchema = new Schema({
  servicio: {
    type: Schema.Types.ObjectId,
    ref: "Servicio",
    required: true,
  },
  mascota: {
    type: Schema.Types.ObjectId,
    ref: "Mascota",
    required: false,
  },
  costoMascota: {
    // Precio al que se hospedó cada mascota
    type: Number,
    default: 0,
    required: false,
  }
});

module.exports = model("Servicio_Mascota", servicioMascotaSchema);