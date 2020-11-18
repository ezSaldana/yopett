const { model, Schema } = require('mongoose');

let numeroMascotas = {
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  message: "El número {VALUE} no es válido, el mínimo es 1 y el máximo 10"
}

const caracteristicasHospedajeSchema = new Schema({
  status: {
    type: Boolean,
    default: true,
    required: false
  },
  checkIn: {
    type: String,
    default: "12:00",
    required: false
  },
  checkOut: {
    type: String,
    default: "11:00",
    required: false
  },
  numeroMascotas: {
    // Cuántas mascotas puede hospedar a la vez
    type: Number,
    default: 1,
    required: [true, "El número de mascotas es obligatorio"],
    enum: numeroMascotas
  },
  lugar: {
    // Características del lugar, con jardín, departamento, casa, etc
    type: Schema.Types.ObjectId,
    ref: 'Lugar',
    required: true
  },
  serviciosAdicionales: {
    type: Schema.Types.ObjectId,
    ref: 'Caracteristicas_Servicios',
    required: false
  },
  preferencias: {
    type: Schema.Types.ObjectId,
    ref: 'Preferencias_Hospedaje',
    required: true
  },
  precios: {
    // TODO: Verificar los precios
    tarifaDia,
    descuentos,
    // Agregar multas por pasar antes o después de cierta hora, precio por hora
  }
});

module.exports = model("CaracteristicasHospedaje", caracteristicasHospedajeSchema);