const { model, Schema } = require("mongoose");

const gatoSchema = new Schema({
  mascota: {
    type: Schema.Types.ObjectId,
    ref: "Mascota",
    required: true
  },
  esterilizado: {
    type: Boolean,
    default: false,
    required: [true, "El campo de mascota esterilizada es obligatorio"]
  }
});

module.exports = model("Gato", gatoSchema);