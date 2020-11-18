const { model, Schema } = require("mongoose");

let tipoLugar = {
  values: ["CASA", "DEPARTAMENTO", "GRANJA", "HABITACION"],
  message: "EL tipo de lugar {VALUE} no es válido, ingrese algún valor válido"
}

let tamanioLugar = {
  values: ["XL", "L", "M", "S", "XS"],
  message: "El tamaño {VALUE} no es válido, ingrese algún valor válido"
}

let lugarSchema = new Schema({
  tipo: {
    type: String,
    required: [true, "El tipo de lugar es obligatorio"],
    enum: tipoLugar
  },
  tamanio: {
    type: String,
    required: [true, "Se necesita saber el tamaño del lugar, este campo es obligatorio"],
    enum: tamanioLugar
  },
  jardin: {
    type: Boolean,
    default: false,
    required: [true, "Se necesita saber si el lugar cuenta con jardín, este campo es obligatorio"]
  },
  espacioAbierto: {
    type: Boolean,
    default: false,
    required: [true, "Se necesita saber si se cuenta con algún espacio abierto, este campo es obligatorio"]
  },
  genteSiempreEnCasa: {
    type: Boolean,
    default: false,
    required: [true, "Se necesita saber si hay gente siempre en casa, este campo es obligatorio"]
  },
});

module.exports = model("Lugar", lugarSchema);