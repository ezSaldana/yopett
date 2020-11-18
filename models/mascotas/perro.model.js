const { model, Schema } = require("mongoose");
const { schema } = require("./yopetteros/yopetteros.model");

let talla = {
  values: ["XL", "L", "M", "S", "XS"],
  message: "El valor {VALUE} no está registrado, ingrese un valor válido"
}

const perroSchema = new Schema({
  mascota: {
    type: Schema.Types.ObjectId,
    ref: "Mascota",
    required: true
  },
  raza: {
    type: String,
    required: false
  },
  talla: {
    type: String,
    required: [true, "La talla del perro es un campo oblgatorio"],
    enum: talla
  },
  vacunado: {
    type:Boolean,
    default: false,
    required: [true, "El campo de mascota vacunada es obligatorio"]
  },
  desparacitado: {
    type: Boolean,
    default: false,
    required: [true, "El campo de mascota desparacitada es obligatorio"]
  },
  esterilizado: {
    type: Boolean,
    default: false,
    required: [true, "El campo de mascota esterilizada es obligatorio"]
  }
});

module.exports = model("Perro", perroSchema);