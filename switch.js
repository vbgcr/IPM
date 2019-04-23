filtersHidden = false;

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

function gotToRestaurantsMenu(){
  document.location.href="restaurantsPopularity1.html";
}

function goToBarsMenu(){
  document.location.href="restaurantsPopularity1.html"
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

function turnCircle3PopularityOn(){
  document.location.href="restaurantsPopularity3.html";
}

function turnCircle1NearYouOn(){
  document.location.href="restaurantsNearYou1.html";
}

function turnCircle2NearYouOn(){
  document.location.href="restaurantsNearYou2.html";
}

function turnCircle3NearYouOn(){
  document.location.href="restaurantsNearYou3.html";
}

function turnCircle1PriceOn(){
  document.location.href="restaurantsPrice1.html";
}

function turnCircle2PriceOn(){
  document.location.href="restaurantsPrice2.html";
}

function turnCircle3PriceOn(){
  document.location.href="restaurantsPrice3.html";
}
function goToThemeScreen(){
  document.location.href = "theme.html";
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


function openBar1Menu(){
  document.location.href = "bar1menu.html";
}

function openBar2Menu(){
  document.location.href = "bar2menu.html";
}

function openBar3Menu(){
  document.location.href = "bar3menu.html";
}

function openBar4Menu(){
  document.location.href = "bar4menu.html";
}