const {model, Schema} = require('mongoose');

let servicios = {
  values: ["BAÑO","CEPILLADO","CORTE_PELO","CORTE_UÑAS","PASEO","TRASLADO"],
  message: "El servicio {VALUE} no está incluido en la lista, ingrese un valor válido"
}

const serviciosAdicionalesSchema = new Schema({
  servicio: {
    type: String,
    enum: servicios
  },
  descripcion: {
    type: String,
    required: false
  },
  caracteristicas: {
    type: String,
    required: false
  },
  costo: {
    type: Number,
    required: false
  }
});

module.exports = model("Servicios_Adicionales", serviciosAdicionalesSchema)