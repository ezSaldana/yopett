const { Schema, model } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

// let validRoles = {
//   values: ['TEST', 'DBA', 'DEV', 'FE_DEV', 'BE_DEV', 'FS_DEV'],
//   message: 'El rol {VALUE} no es válido',
// }
// let validLevels = {
//   values: ['JR', 'MD', 'SR'],
//   message: 'El nivel {VALUE} no es válido',
// }

// let tiemposDisponibles = {
//   values: ["6","6:30","7","7:30","8","8:30","9","9:30","10","10:30","11","11:30","12","12:30","13","13:30","14","14:30","15","15:30","16","16:30","17","17:30","18","18:30","19","19:30","20","20:30","21","21:30","22","22:30","23"],
//   message: "El horario {VALUE} no es válido"
// }

// TODO: esquema para guardar fotos del lugar y de los servicios del yopettero

const yopetteroSchema = new Schema({
  persona: {
    type: Schema.Types.ObjectId,
    ref: 'Persona',
    required: true
  },
  descripcion: {
    // sobre el yopettero
    type: String,
    required: false
  },
  profesion: {
    type: String,
    required: false,
  },
  disponibilidad: [{
    // días y horarios en los que está disponible la persona
    anio: {
      type: Number,
      required: [true, "El año en el que se registran las fechas de descanso es obligatorio"]
    },
    descanso: {
      type: Schema.Types.ObjectId,
      ref: "Disponibilidad",
      required: false
    }
  }],
  experiencia: {
    // Cuánta experiencia tiene la persona cuidando mascotas
    type: Schema.Types.ObjectId,
    ref: "Experiencia",
    required: true
  },
  ubicacion: {
    // Ubicación de la persona, dirección, número ext, numero int, ciudad, estado, pais, CP, descripción del lugar
    type: Schema.Types.ObjectId,
    ref: "Ubicacion",
    required: true
  },
  paseo: {
    // Características de los paseos, si ofrece paseos y otras cosas
    type: Schema.Types.ObjectId,
    ref: "Caracteristicas_Paseo",
    required: false
  },
  hospedaje: {
    type: Schema.Types.ObjectId,
    ref: 'Caracteristicas_Hospedaje',
    required: true
  },
  habilidades: {
    // Sabe administrar medicinas, poner inyecciones, entrenar, etc
    type: Schema.Types.ObjectId,
    ref: "Habilidades",
    required: true
  },
  estado: {
    // estado del yopettero
    type: Boolean,
    default: false
  },
});

userSchema.methods.toJSON = function() {
  let user = this.toObject();
  delete user.password;
  return user;
}

userSchema.plugin(uniqueValidator, { message: 'Este {PATH} ya está registrado, intenta registrar uno nuevo.' });

module.exports = model('Yopettero', yopetteroSchema);