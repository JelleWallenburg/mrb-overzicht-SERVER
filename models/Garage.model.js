const { Schema, model } = require("mongoose");

const garageSchema = new Schema(
  {
		ownedBy: {
			type: Schema.Types.ObjectId, 
			ref: "User"
		},
		garageName: {
			type: String,
			required: true
		},
		postalCode: {
			type: String,
			required: true
		}
	},
	{
		timestamps:true
	}
);

const Garage = model("Garage", garageSchema);

module.exports = Garage;