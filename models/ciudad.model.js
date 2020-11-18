const { Schema, model } = require("mongoose");

const ciudadSchema = new Schema({
  ciudad: {
    type: String,
    required: [true, "La ciudad es obligatoria"]
  },
  estado: {
    type: Schema.Types.ObjectId,
    ref: "Estado",
    required: true
  }
});

module.exports = model("Ciudad", ciudadSchema);