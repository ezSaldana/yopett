const { model, Schema } = require("mongoose");

const habilidadesSchema = new Schema({
  administraMedicamentos: {
    type: Boolean,
    default: false,
    required: false
  },
  sabeInyectar: {
    type: Boolean,
    default: false,
    required: false
  },
  entrena: {
    type: Boolean,
    default: false,
    required: false
  },
  primerosAuxilios: {
    type:Boolean,
    default: false,
    required: false
  },
  cuidaBebes: {
    type: Boolean,
    default: false,
    required: false
  },
  cuidaAdultos: {
    type: Boolean,
    default: false,
    required: false
  }
});

module.exports = model("Habilidades", habilidadesSchema);