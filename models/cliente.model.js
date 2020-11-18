const { model, Schema } = require("mongoose");

const clienteSchema = new Schema({
  persona : {
    type: Schema.Types.ObjectId,
    ref: "Persona",
    required: true,
  },
});

module.exports = model("Cliente", clienteSchema);