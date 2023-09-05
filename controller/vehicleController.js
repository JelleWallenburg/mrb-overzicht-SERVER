const Vehicle = require("../models/Vehicle.model");
const axios = require("axios");
const taxMrb = require("../tax-calculation/tariefMrb")

const seeVehicle = async (req, res) => {
  try {
    const {inGarageOf} = req.query;
    const seeVehicle = await Vehicle.find({inGarageOf: inGarageOf}).lean()
    const seeVehicleTax = seeVehicle.map((voertuig) => ({...voertuig, mrb: taxMrb.tariefMrb(voertuig.voertuigsoort, voertuig.massa_ledig_voertuig, voertuig.brandstof_omschrijving)}))
    res.status(200).json(seeVehicleTax)
  } catch(err){
    res.status(500).json({message: "Internal Server Error seeing Vehicle"})
  }
}

const addVehicle = async (req, res) => {

  try{
    const {inGarageOf} = req.query;
    const {licensePlate} = req.body;

    const licensePlateRegex = /^[A-Z0-9]+$/;
    if(!licensePlateRegex.test(licensePlate) || licensePlate.length !== 6) {
      res.status(400).json({message: "Not a valid license plate."})
      return;
    }

    //API-call to RDW
    const vehicleData = await axios.get(`https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken=${licensePlate}`);
    const {voertuigsoort, bruto_bpm, massa_ledig_voertuig}= vehicleData.data[0];
    const vehicleFuelData = await axios.get(`https://opendata.rdw.nl/resource/8ys7-d773.json?kenteken=${licensePlate}`);
    const {brandstof_omschrijving} = vehicleFuelData.data[0];

    const newVehicle = await Vehicle.create({
      inGarageOf: inGarageOf,
      licensePlate: licensePlate,
      voertuigsoort:voertuigsoort,
      bruto_bpm:bruto_bpm,
      massa_ledig_voertuig:massa_ledig_voertuig,
      brandstof_omschrijving: brandstof_omschrijving,
    })
    res.status(201).json(newVehicle)
  } catch(err){
    console.log(err)
    res.status(500).json({message: "Internal Server Error Adding Vehicle"})
  }
}

const delVehicle = async (req, res) => {
  try{
    const { _id }= req.body;
    const deleteVehicle = await Vehicle.findByIdAndRemove(_id)
    res.status(200).json({message: "Vehicle succesfully deleted"})
  } catch(err) {
    res.status(500).json({message: "Internal Server Error Deleting Vehicle"})
  }
}

module.exports= {seeVehicle, addVehicle, delVehicle}