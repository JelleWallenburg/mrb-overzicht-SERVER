const { Schema, model } = require("mongoose");

const vehicleSchema = new Schema(
  {
    inGarageOf: {
      type: Schema.Types.ObjectId, 
      ref: "Garage",
      required: true
    },
    licensePlate: {
      type: String,
      required: true,
    },
    voertuigsoort: { //from API gekentekende_voertuigen
      type: String,
      required: true
    },
    bruto_bpm: { //from API gekentekende_voertuigen
      type: Number
    },
    massa_ledig_voertuig: { //from API gekentekende_voertuigen
      type: Number,
      required: true
    },
    brandstof_omschrijving: { //from API gekentekende_voertuigen_brandstof
      type: String,
      required: true
    },
    datum_eerste_toelating: {
      type: Number
    },
    co2_uitstoot_gecombineerd: {
      type: Number
    },
    emissie_co2_gecombineerd_wltp: {
      type: Number
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Vehicle = model("Vehicle", vehicleSchema);

module.exports = Vehicle;