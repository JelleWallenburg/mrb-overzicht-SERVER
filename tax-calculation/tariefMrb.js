const { tariefMotorrijwiel } = require("./tariefMotorrijwiel");
const { tariefPersonenauto } = require("./tariefPersonenauto");

function tariefMrb(voertuigsoort, massa_ledig_voertuig, brandstof_omschrijving, datum_eerste_toelating, co2_uitstoot_gecombineerd, emissie_co2_gecombineerd_wltp){
  let tariefMrb = null;
  if(voertuigsoort === "Personenauto") {
    tariefMrb = tariefPersonenauto(massa_ledig_voertuig, brandstof_omschrijving, datum_eerste_toelating, co2_uitstoot_gecombineerd, emissie_co2_gecombineerd_wltp)
  } else if (voertuigsoort === "Motorfiets") {
    tariefMrb = tariefMotorrijwiel();
  } else {
    tariefMrb = null;
    console.log("Voertuigsoort is geen personenauto of motorfiets");
  }
  let tariefMrbMaandAfgrond= Math.floor(tariefMrb)
  return tariefMrbMaandAfgrond;
}

module.exports = {tariefMrb};

