const { isAuthenticated } = require("../middlewares/jwt.middleware");
const Garage = require("../models/Garage.model");
const Vehicle =require("../models/Vehicle.model")

const router = require("express").Router();

router.get("/", isAuthenticated, (req, res) => {
  const { _id } = req.payload;
  Garage.find({ownedBy:_id})
  .then((garages) => res.status(200).json(garages))
  .catch((err) => res.json(err))
});

router.post("/", isAuthenticated, (req, res) =>{
  const { _id }= req.payload;
  const { garageName, postalCode} =req.body;

  //Check if postalCode is plausible
  const postalCodeNumber = postalCode.substr(0,4);
  const postalCodeNumberRegex = /^\d+$/;
  
  const postalCodeLetter = postalCode.substr(4,6);
  const postalCodeLetterRegex = /^[A-Z]+$/;
  console.log(postalCodeNumber, postalCodeLetter)

  if(!postalCodeNumberRegex.test(postalCodeNumber) || !postalCodeLetterRegex.test(postalCodeLetter)) {
    res.status(401).json({ message: "Not a valid postal code."});
    console.log("error postalcode")
    return;
  };

  Garage.findOne({ownedBy:_id, garageName:garageName})
  .then((garage) => {
        if (garage) {
      res.status(400).json({ message: "Garage name already exists."})
      return;
    }

    return Garage.create({
      ownedBy: _id,
      garageName: garageName,
      postalCode: postalCode
    });
  })
  .then((createdGarage) => res.status(201).json(createdGarage))
  .catch((err) => console.log('error backend', error));
});

router.put("/", (req,res)=>{
  const { _id, garageName, postalCode} = req.body;

  Garage.findByIdAndUpdate(_id,{ garageName, postalCode },{new: true})
  .then(updatedGarage => {
    const {_id, ownedBy, garageName, postalCode} = updatedGarage;
    res.json({updatedGarage: {_id, ownedBy, garageName, postalCode}})
  })
  .catch(err => console.error(err))
})

router.delete("/", isAuthenticated, (req,res)=> {
  const { _id }= req.body;
  Garage.findByIdAndRemove(_id)
  .then(oneGarage => {
    Vehicle.deleteMany({inGarageOf: oneGarage._id}, {new: true})
    .then(res.status(200).json({ message: "Garage succesfully deleted"}))
  })
  .catch(err => res.json(err))
})


module.exports = router;