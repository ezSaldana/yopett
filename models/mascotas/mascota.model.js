const { model, Schema } = require("mongoose");

let sexo = {
  values: ["MACHO", "HEMBRA"],
  message: "El valor {VALUE} no está registrado, ingrese un valor válido"
}

const mascotaSchema = new Schema({
  nombre: {
    type: String,
    required: [true, "El nombre de la mascota es obligatorio"]
  },
  fechaNacimiento: {
    type: Date,
    required: true
  },
  edad: {
    type: Number,
    required: false
  },
  sexo: {
    type: String,
    required: false,
    enum: sexo
  },
  discapacitado: {
    type: Boolean,
    required: false
  },
  descripcion: {
    type: String,
    required: false
  },
  persona: {
    type: Schema.Types.ObjectId,
    ref: "Persona",
    required: true
  }
});

module.exports = model("Mascota", mascotaSchema);