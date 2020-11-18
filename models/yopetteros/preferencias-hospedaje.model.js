const { model, Schema } = require("mongoose");

let mascotasAdmitidas = {
  values: ["PERROS", "GATOS", "AVES","EXOTICOS"],
  message: "El valor {VALUE} no se encuentra dentro de los valores admitidos, ingrese un valor válido"
}

let tamanioMascota = {
  values: ["ALL","XL","L","M","S","XS"],
  message: "El valor {VALUE} no se encuentra en la lista, infrese un valor válido"
}

let sexoMascota = {
  values: ["MACHO","HEMBRA"],
  message: "EL valor {VALUE} no está permitido, ingrese un valor válido"
}

const preferenciasHospedajeSchema = new Schema({
  // Qué mascotas y cómo las prefiere
  admite: [{
    mascota: {
      type: String,
      required: [true, "Se necesita saber qué mascotas se admiten, este campo es obligatorio"],
      enum: mascotasAdmitidas
    }
  }],
  tamañoMascotas: {
    type: String,
    default: "ALL",
    enum: tamanioMascota
  },
  sexoMascotas: {
    type: String,
    enum: sexoMascota
  },
  mascotasEnMuebles: {
    type:Boolean,
    default: false,
  },
  mascotasEnCasa: {
    type:Boolean,
    default: false,
  },
  lugarMascotas: {
    // Para saber dónde se quedan las mascotas
    type:String,
    required: false,
  },
  restricciones: {
    // Que ocupa el yopettero que las mascotas tengan para hospedarlas
    type: Schema.Types.ObjectId,
    ref: 'Restricciones_Preferencias',
    required: false
  }
});

module.exports = model("Preferencias_Hospedaje", preferenciasHospedajeSchema);