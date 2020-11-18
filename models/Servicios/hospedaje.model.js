const { Schema, model } = require("mongoose");

// TODO: checar reglas y ocasiones en las que se tiene que multar al cliente por cancelar un hospedaje

let descuentoMayoreo = {
  values: [5, 10, 15, 20, 25],
  message: "El {VALUE}% de descuento no se puede agregar, ingrese un valor válido"
}

const hospedajeSchema = new Schema({
  servicio: {
    type: Schema.Types.ObjectId,
    ref: "Servicio",
    required: true,
  },
  checkIn: {
    type: Date,
    required: [true, "La fecha de check in es obligatoria"],
  },
  checkOut: {
    type: Date,
    required: [true, "La fecha de check out es obligatoria"],
  },
  tipoHospedaje: {
    type: Schema.Types.ObjectId,
    ref: "Tipo_Hospedaje",
    required: true,
  },
  // TODO: El precio ya no se encuentra en el servicio, ahora está dado por el yopettero
  // Precios para la mascota 1
  primerMascota: {
    type: Number,
    required: [true, "La primer mascota es obligatoria"],
  },
  descuentoPrimerMascota: {
    type: Number,
    default: 0,
    required: [true, "El descuento de la primer mascota es obligatorio"],
  },
  tarifa: {
    type: Number,
    required: [true, "La tarifa por día es obligatoria"],
  },
  tarifaConDescuento: {
    type: Number,
    default: 0,
    required: [true, "El descuento de la tarifa por día es obligatorio"],
  },
  // Precios para mascota extra
  mascotaExtra: {
    type: Number,
    default: 0,
    required: false,
  },
  descuentoMascotaExtra: {
    type: Number,
    default: 0,
    required: false,
  },
  tarifaMascotaExtra: {
    // Incluye descuento de 50%
    type: Number,
    default: 0,
    required: false,
  },
  tarifaMascotaExtraConDescuento: {
    type: Number,
    default: 0,
    required: false,
  },
  // TOTAL
  costoPorMascota: {
    // El costo por mascota es el total entre el número de mascotas hospedadas
    type: Number,
    default: 0,
    required: false,
  },
  descuentoMayoreo: {
    type: Number,
    default: 0,
    enum: descuentoMayoreo,
  },
  costoTotal: {
    type: Number,
    required: [true, "El costo total del hospedaje es obligatorio"],
  },
  pagado: {
    type: Boolean,
    required: [true, "El campo pagado es obligatorio"],
  }
});

module.exports = model("Hospedaje", hospedajeSchema);