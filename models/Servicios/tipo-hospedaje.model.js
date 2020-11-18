const { model, Schema } = require("mongoose");

let sencillo = {
  values: ["PERRO", "GATO","AVE"],
  message: "El valor {VALUE} no está registrado, ingrese un valor válido"
}

const tipoHospedajeSchema = new Schema({
  sencillo: {
    // Para perros, gatos y aves
    type: String,
    required: false,
    enum: sencillo
  },
  combinado: {
    // Para combinaciones de perros y gatos, gatos y aves, aves y perros o los tres
    type: Array,
    required: false,
  },
  exotico: {
    // Para animales no registrados como serpientes, iguanas, hurones, etc...
    type: String,
    required: false,
  },
  exoticoCombinado: {
    // Lo mismo que el combinado pero permite perros, gatos y aves
    type:Array,
    required: false,
  }
});

module.exports = model("Tipo_Hospedaje", tipoHospedajeSchema);