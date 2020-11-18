const { model, Schema } = require("mongoose");

let tipoPago = {
  values: ["TRANSFERENCIA", "EFECTIVO", "CREDITO", "DEBITO", "PAYPAL", "MERCADO_PAGO", "CONEKTA"],
  message: "El tipo de pago {VALUE} no está permitido, ingrese un valor válido"
}

const pagoSchema = new Schema({
  persona: {
    type: Schema.Types.ObjectId,
    ref: "Persona",
    required: true
  },
  tipoPago: {
    type: String,
    enum: tipoPago,
    required: [true, "El tipo de pago es obligatrio"],
  },
  status: {
    type: Boolean,
    default: false
  }
});

module.exports = model("Pago", pagoSchema);