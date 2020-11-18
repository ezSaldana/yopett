const { Schema, model } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

let usuarioSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, "El email es obligatorio"]
  },
  password: {
    type: String,
    required: [true, "La contraseña es requerida"]
  },
  googleAuth: {
    type: Boolean,
    default: false,
    required: false
  },
  facebookAuth: {
    type: Boolean,
    default: false,
    required: false
  },
  image: {
    type: String,
    required: false
  }
});

usuarioSchema.methods.toJSON = function () {
  let usuario = this.toObject();
  delete usuario.password;
  return usuario;
}

usuarioSchema.plugin(uniqueValidator, {message: "Este {PATH} ya está registrado, intenta registrar uno nuevo."});

module.exports = model("Usuario", usuarioSchema);