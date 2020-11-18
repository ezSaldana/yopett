const { model, Schema } = require("mongoose");

const caracteristicasPaseoSchema = new Schema({
  status: {
    type: Boolean,
    default: false,
    required: false,
  },
  lun: {
    type: Boolean,
    default: false,
    required: false
  },
  mar: {
    type: Boolean,
    default: false,
    required: false
  },
  mie: {
    type: Boolean,
    default: false,
    required: false
  },
  jue: {
    type: Boolean,
    default: false,
    required: false
  },
  vie: {
    type: Boolean,
    default: false,
    required: false
  },
  sab: {
    type: Boolean,
    default: false,
    required: false
  },
  dom: {
    type: Boolean,
    default: false,
    required: false
  }
});

module.exports = model("Caracteristicas_Paseo", caracteristicasPaseoSchema);