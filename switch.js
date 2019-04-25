filtersHidden = false;

function goback(){
  window.history.back()
}

function unlock(){
  document.location.href = "mainScreen.html";
}

function relock(){
  document.location.href = "lockedScreen.html";
}

function goToHomeScreen(){
  document.location.href = "mainScreen.html";
}

function goToVitalsScreen(){
  document.location.href = "gettingVitals.html";
}

function waitForVitals(){
  setTimeout(goToRealVitalsScreen, 3000);
}

function goToRealVitalsScreen(){
  var r = Math.random();
  if(r < 0.3){
    document.location.href = "vitalsScreenBad.html";
  }
  else if(r < 0.6){
    document.location.href = "vitalsScreenMedium.html";
  }
  else{
    document.location.href = "vitalsScreenGood.html";
  }
}


function goToSettingsScreen(){
  document.location.href = "settings.html";
}

function goToThemeScreen(){
  document.location.href = "theme.html";
}

function turnOnDoNotDisturb(){
  if(sessionStorage.getItem("doNotDisturbIsOn") == "visible"){
    sessionStorage.setItem("doNotDisturbIsOn", "hidden");
    document.getElementById("smallDoNotDisturb").style.visibility = "hidden";
  }
  else{
    document.getElementById("smallDoNotDisturb").style.visibility = "visible"
  }

}

function isDoNotDisturbOn(){
  if(sessionStorage.getItem("doNotDisturbIsOn") == "visible"){
    document.getElementById("smallDoNotDisturb").style.visibility = "visible";
  }
}

function shareLocation(){
  document.getElementById("smallPin").style.visibility = "visible";
}

function callAmbulance(){
  document.getElementById("ambulanceMenu").style.visibility = "visible";
  document.getElementById("yesButton").style.visibility = "visible";
  document.getElementById("noButton").style.visibility = "visible";
}

function callAmbulanceBadVitals(){
  setTimeout(callAmbulance, 3000);
}

function openSecondAmbulanceMenu(){
  document.getElementById("ambulanceMenu").style.visibility = "hidden";
  document.getElementById("yesButton").style.visibility = "hidden";
  document.getElementById("noButton").style.visibility = "hidden";
  document.getElementById("secondAmbulanceMenu").style.visibility = "visible";
}

function closeAmbulanceMenu(){
  document.getElementById("ambulanceMenu").style.visibility = "hidden";
  document.getElementById("yesButton").style.visibility = "hidden";
  document.getElementById("noButton").style.visibility = "hidden";
}

function closeSecondAmbulanceMenu(){
  document.getElementById("secondAmbulanceMenu").style.visibility = "hidden";
}

function openPointsOfInterest(){
  document.location.href="pointsOfInterest.html";
}

function goToRestaurantsMenu(){
  document.location.href="restaurantsPopularity1.html";
}

function showOtherFilters(){
  if(filtersHidden){
    document.getElementById("filter2").style.visibility = "hidden";
    document.getElementById("filter3").style.visibility = "hidden";
    filtersHidden = false;
  }
  else{
    document.getElementById("filter2").style.visibility = "visible";
    document.getElementById("filter3").style.visibility = "visible";
    filtersHidden = true;
  }
}

function turnCircle1PopularityOn(){
  document.location.href="restaurantsPopularity1.html";
}

function turnCircle2PopularityOn(){
  document.location.href="restaurantsPopularity2.html";
}

function turnCircle1NearYouOn(){
  document.location.href="restaurantsNearYou1.html";
}

function turnCircle2NearYouOn(){
  document.location.href="restaurantsNearYou2.html";
}

function turnCircle1PriceOn(){
  document.location.href="restaurantsPrice1.html";
}

function turnCircle2PriceOn(){
  document.location.href="restaurantsPrice2.html";
}

function turnCircle1BarPopularityOn(){
  document.location.href="barsPopularity1.html";
}

function turnCircle2BarPopularityOn(){
  document.location.href="barsPopularity2.html";
}

function turnCircle1BarNearYouOn(){
  document.location.href="barsNearYou1.html";
}

function turnCircle2BarNearYouOn(){
  document.location.href="barsNearYou2.html";
}

function turnCircle1BarPriceOn(){
  document.location.href="barsPrice1.html";
}

function turnCircle2BarPriceOn(){
  document.location.href="barsPrice2.html";
}

function goToTransports(){
  document.location.href = "publicTransports.html";
}

function openBusStopMenu1(){
  document.getElementById("busStopMenu1").style.visibility = "visible";
  document.getElementById("hoursBackButton1").style.visibility = "visible";
}

function closeBusStopMenu1(){
  document.getElementById("busStopMenu1").style.visibility = "hidden";
  document.getElementById("hoursBackButton1").style.visibility = "hidden";
}

function openBusStopMenu2(){
  document.getElementById("busStopMenu2").style.visibility = "visible";
  document.getElementById("hoursBackButton2").style.visibility = "visible";
}

function closeBusStopMenu2(){
  document.getElementById("busStopMenu2").style.visibility = "hidden";
  document.getElementById("hoursBackButton2").style.visibility = "hidden";
}

function openSubwayMenu1(){
  document.getElementById("subwayMenu1").style.visibility = "visible";
  document.getElementById("subwayBackButton1").style.visibility = "visible";
}

function closeSubwayMenu1(){
  document.getElementById("subwayMenu1").style.visibility = "hidden";
  document.getElementById("subwayBackButton1").style.visibility = "hidden";
}

function goToBarsScreen(){
  document.location.href = "barsPopularity1.html";
}

function red_frog(){
  document.location.href = "redFrog.html";
}

function artesian(){
  document.location.href = "artesian.html";
}

function hard_rock(){
  document.location.href = "hardRock.html";
}

function oito_nove(){
  document.location.href = "oitoNove.html";
}


function openRedFrogMenu(){
  document.location.href = "redFrogMenu.html";
}

function openArtesianMenu(){
  document.location.href = "artesianmenu.html";
}

function openHardRockMenu(){
  document.location.href = "hardRockMenu.html";
}

function openOitoNoveMenu(){
  document.location.href = "oitoNoveMenu.html";
}

function turnCircle2PopularityOnBars(){
  document.location.href = "barsPopularity2.html";
}

function turnCircle1PopularityOnBars(){
  document.location.href = "barsPopularity1.html";
}

function goToCantinho(){
  document.location.href = "cantinho.html";
}

function goToHorta(){
  document.location.href = "horta.html";
}

function goToEntrecote(){
  document.location.href = "entrecote.html";
}

function goToHortaMenu(){
  document.location.href = "HortaMenu.html";
}

function goToCantinhoMenu(){
  document.location.href = "cantinhoMenu.html";
}

function goToEntrecoteMenu(){
  document.location.href = "entrecoteMenu.html";
}

function goToMc(){
  document.location.href = "mcDonalds.html";
}

function goToMcMenu(){
  document.location.href = "mcDonaldsMenu.html";
}

function goToHorta(){
  document.location.href = "horta.html";
}

function goToCantinho(){
  document.location.href = "cantinho.html";
}

function goToBrasserie(){
  document.location.href = "entrecote.html";
}

function goToMc(){
  document.location.href = "mcDonalds.html";
}