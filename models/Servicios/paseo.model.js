const { Schema, model } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const paseoSchema = new Schema({
  
});

module.exports = model("Paseo", paseoSchema);