const Vehicle = require("../models/Vehicle.model");
const taxMrb = require("../tax-calculation/tariefMrb")

const seeVehicle = async (req, res) => {
  try {
    const {id} = req.query;
    console.log(id)
    const seeVehicle = await Vehicle.find({_id: id}).lean()
    const seeVehicleTax = seeVehicle.map((voertuig) => ({...voertuig, mrb: taxMrb.tariefMrb(voertuig.voertuigsoort, voertuig.massa_ledig_voertuig, voertuig.brandstof_omschrijving)}))
    res.status(201).json(seeVehicleTax)
  } catch(err){
    res.status(500).json({message: "Internal Server Error seeing Vehicle"})
  }
}

module.exports= {seeVehicle}