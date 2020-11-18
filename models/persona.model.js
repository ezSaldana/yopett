const { Schema, model } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

let personaSchema = new Schema({
  nombre: {
    type: String,
    required: [truen, "El campo nombre es obligatorio"]
  },
  apellidos: {
    type: String,
    required: false
  },
  fechaNacimiento: {
    type: Date,
    required: [true, "La fecha de nacimiento es obligatoria"]
  },
  celular: {
    type: String,
    unique: true,
    required: [true, "El celular es obligatorio"]
  },
  usuario: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
    required: true
  }
});

personaSchema.plugin(uniqueValidator, "Este {PATH} ya está registrado, intente agregando uno diferente");

module.exports = model("Persona", personaSchema);