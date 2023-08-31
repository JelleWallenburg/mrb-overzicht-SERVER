const { tariefMotorrijwiel } = require("./tariefMotorrijwiel");
const { tariefPersonenauto } = require("./tariefPersonenauto");

function tariefMrb(voertuigsoort, massa_ledig_voertuig, brandstof_omschrijving){
  if(voertuigsoort == "Personenauto") {
    tariefMrb = tariefPersonenauto(massa_ledig_voertuig, brandstof_omschrijving)
  } else if (voertuigsoort == "Motorfiets") {
    tariefMrb = tariefMotorrijwiel();
  } else {
    tariefMrb = null;
    console.log("Voertuigsoort is geen personenauto of motorfiets");
  }
  return tariefMrb;
}

console.log("check tariefMrb", tariefMrb("Personenauto", 1000, "Benzine"));
