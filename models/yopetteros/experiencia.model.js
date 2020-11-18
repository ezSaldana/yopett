const { model, Schema } = require("mongoose");

const experienciaSchema = new Schema({
  desde: {
    type: Date,
    required: [true, "El campo para saber desde cuando cuida animales es obligatorio"]
  },
  anios: {
    type: Number,
    required: [true, "El campo años de experiencia es obligaotrio"]
  },
  entrenando: {
    type:Boolean,
    required: false
  }
});

module.exports = model("Experiencia", experienciaSchema);