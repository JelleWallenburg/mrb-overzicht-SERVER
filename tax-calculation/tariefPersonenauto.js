function tariefstellingPersonenauto(massa_ledig_voertuig) {
  let belasting = null;
  let eigen_massa= -Math.round(-massa_ledig_voertuig/100)*100 //art. 22 lid 1 onderdeel b sub 2 afronden
  //lid 1
  if(eigen_massa <= 500){ 
    belasting= 18.75;
  } else if(eigen_massa == 600){
    belasting= 25.44;
  } else if(eigen_massa == 700){
    belasting= 32.33;
  } else if(eigen_massa == 800) {
    belasting = 42.20;
  } else if(eigen_massa >= 900 && eigen_massa <= 3200){
    belasting = 56.13 + 15.13 * (eigen_massa - 900)/100;
  } else if(eigen_massa >= 3300){
    belasting = 414.29 + 10.48 * (eigen_massa - 3300)/100;
  }
  return belasting
};

//lid 2 aanhef
function brandstoftoeslag(brandstof_omschrijving, massa_ledig_voertuig){
  let brandstoftoeslag = null;
  let eigen_massa= -Math.round(-massa_ledig_voertuig/100)*100 // of samenvoegen
  
  if (brandstof_omschrijving == "Benzine"){ // of gelijkwaardig aan lichte olie
    brandstoftoeslag = 0;
  } else if(brandstof_omschrijving == "Diesel"){ // lid 2 onderdeel a
    if (eigen_massa <= 500){
      brandstoftoeslag = 73.52
    } else if (eigen_massa == 600){
      brandstoftoeslag = 87.52
    } else if (eigen_massa  == 700){
      brandstoftoeslag = 100.51
    } else if (eigen_massa == 800){
      brandstoftoeslag = 114.25
    } else if (eigen_massa >= 900){
      brandstoftoeslag == 133.69 + 14.48*(eigen_massa - 900)/100
    }
  } 
  //lid 2 slot
  else if (brandstof_omschrijving == "Elektriciteit") { //lid 2 slot
    brandstoftoeslag = 0;
  } 
  // lid 3
  else if (brandstof_omschrijving == "CNG" || "LNG" ||"LPG"){
    if (eigen_massa <= 800){
      brandstoftoeslag = 0;
    } else if (eigen_massa >= 900){
      brandstoftoeslag = 16.64 + 16.64 *(eigen_massa - 900)/100
    } 
  } 
  //lid 2 onderdeel b
  else {
    if (eigen_massa <= 500){
      brandstoftoeslag = 86.25
    } else if (eigen_massa == 600){
      brandstoftoeslag = 103.39
    } else if (eigen_massa  == 700){
      brandstoftoeslag = 120.54
    } else if (eigen_massa == 800){
      brandstoftoeslag = 137.65
    } else if (eigen_massa >= 900){
      brandstoftoeslag == 150.36 + 15.92*(eigen_massa - 900)/100
    }
  }
  return brandstoftoeslag
};

//lid 4 fijnstoftoeslag


// art. 23b
function personenAutometLageUitstoot(tarief, datum_eerste_toelating, co2_uitstoot_gecombineerd, emissie_co2_gecombineerd_wltp){
  //lid 3
  let co2Uitstoot = null;
  if (datum_eerste_toelating < 20210101){
    co2Uitstoot = co2_uitstoot_gecombineerd;
  } else{
    co2Uitstoot=  emissie_co2_gecombineerd_wltp;
  }

  //lid 1 onderdeel a
  let belasting;
  if (co2Uitstoot == 0 ||co2Uitstoot == 0){
    belasting = 0;
  } else if((co2Uitstoot > 0)  && !(co2Uitstoot > 50 )){
    belasting = tarief * 0.5;
  } else {
    belasting = tarief
  }
  return belasting
}

function tariefPersonenauto (massa_ledig_voertuig, brandstof_omschrijving, datum_eerste_toelating, co2_uitstoot_gecombineerd, emissie_co2_gecombineerd_wltp) {
  let tariefArtikel23 = tariefstellingPersonenauto(massa_ledig_voertuig) + brandstoftoeslag(brandstof_omschrijving, massa_ledig_voertuig);
  console.log('tarief artikel 23', tariefArtikel23)
  let tariefArtikel23b = personenAutometLageUitstoot(tariefArtikel23, datum_eerste_toelating, co2_uitstoot_gecombineerd, emissie_co2_gecombineerd_wltp);
  console.log('tarief artikel 23b', tariefArtikel23b)
  return tariefArtikel23b
}

// fijnstoftoeslag
// opcenting

module.exports= {tariefPersonenauto};