const { Schema, model } = require("mongoose");

const vehicleSchema = new Schema(
  {
    inGarageOf: {
      type: Schema.Types.ObjectId, 
      ref: "Garage"
    },
    licensePlate: {
      type: String,
        
    }
  },
  {
    timestamps: true
  }
)

const Vehicle = model("Vehicle", vehicleSchema);

module.exports = Vehicle;