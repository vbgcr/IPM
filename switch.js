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
    sessionStorage.setItem("doNotDisturbIsOn", "visible");
  }

}

function isDoNotDisturbOn(){
  if(sessionStorage.getItem("doNotDisturbIsOn") == "visible"){
    document.getElementById("smallDoNotDisturb").style.visibility = "visible";
    sessionStorage.setItem("doNotDisturbIsOn", "visible");
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
    document.getElementById("filter2").style.visibility = "collapse";
    document.getElementById("filter3").style.visibility = "collapse";
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

function turnCircle1BarsPopularityOn(){
  document.location.href="barsPopularity1.html";
}

function turnCircle2BarsPopularityOn(){
  document.location.href="barsPopularity2.html";
}

function turnCircle1BarsNearYouOn(){
  document.location.href="barsNearYou1.html";
}

function turnCircle2BarsNearYouOn(){
  document.location.href="barsNearYou2.html";
}

function turnCircle1BarsPriceOn(){
  document.location.href="barsPrice1.html";
}

function turnCircle2BarsPriceOn(){
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

function goToRestaurantsMap(){
  document.location.href = "restaurantMap.html"
}

function goToBarMap(){
  document.location.href = "barMap.html"
}

function goToMuseums(){
  document.location.href = "museumsPopularity1.html";
}

function openMuseumMap(){
  document.location.href = "museumMap.html"
}

function goToMaatPrices(){
  document.location.href = "maatPrecos.html"
}

function goToFarmacia(){
  document.location.href = "farmacia.html";
}

function goToCoches(){
  document.location.href = "museuDosCoches.html";
}

function goToMaat(){
  document.location.href = "maat.html";
}

function goToOceanario(){
  document.location.href = "oceanario.html";
}

function turnCircle1PopularityOnMuseums(){
  document.location.href = "museumsPopularity1.html";
}

function turnCircle2PopularityOnMuseums(){
  document.location.href = "museumsPopularity2.html";
}

function turnCircle1PriceOnMuseums(){
  document.location.href = "museumsPrice1.html";
}

function turnCircle2PriceOnMuseums(){
  document.location.href = "museumsPrice2.html";
}

function turnCircle1NearYouOnMuseums(){
  document.location.href = "museumsNearYou1.html";
}

function turnCircle2NearYouOnMuseums(){
  document.location.href = "museumsNearYou2.html";
}

function goToIMeet(){
  document.location.href = "iMeet.html";
}

function goToGroups(){
  document.location.href = "iMeetGroups.html";
}

function goToFriends(){
  document.location.href = "iMeetFriends.html"
}

function goToProfileZe(){
  document.location.href = "profileZe.html"
}
function goToProfileAndreia(){
  document.location.href = "profileAndreia.html"
}

function goToProfileLe(){
  document.location.href = "profileLe.html"
}

function goToProfilePacheco(){
  document.location.href = "profilePacheco.html"
}

function goToProfileJoao(){
  document.location.href = "profileJoao.html"
}

function goToProfileVasco(){
  document.location.href = "profileVasco.html"
}

function goToDeckersGroup(){
  document.location.href = "groupDeckers.html";
}

function callDeckers(){
  document.location.href = "callDeckers.html";
}

function callFriendDeckers(){
  setTimeout(startCallWithDeckers, 3000);
}

function startCallWithDeckers(){
  document.location.href = "onCallDeckers.html";
}

function hangUpDeckers(){
  document.location.href = "hangUpDeckers.html";
}

function hangUpTimerDeckers(){
  setTimeout(endCallWithDeckers, 1750);
}

function endCallWithDeckers(){
  document.location.href = "profileAndreia.html";
}

function callJoao(){
  document.location.href = "callJoao.html";
}

function callFriendJoao(){
  setTimeout(startCallWithJoao, 3000);
}

function startCallWithJoao(){
  document.location.href = "onCallJoao.html";
}

function hangUpJoao(){
  document.location.href = "hangUpJoao.html";
}

function hangUpTimerJoao(){
  setTimeout(endCallWithJoao, 1750);
}

function endCallWithJoao(){
  document.location.href = "profileJoao.html";
}

function callPacheco(){
  document.location.href = "callPacheco.html";
}

function callFriendPacheco(){
  setTimeout(startCallWithPacheco, 3000);
}

function startCallWithPacheco(){
  document.location.href = "onCallPacheco.html";
}

function hangUpPacheco(){
  document.location.href = "hangUpPacheco.html";
}

function hangUpTimerPacheco(){
  setTimeout(endCallWithPacheco, 1750);
}

function endCallWithPacheco(){
  document.location.href = "profilePacheco.html";
}


function callVasco(){
  document.location.href = "callVasco.html";
}

function callFriendVasco(){
  setTimeout(startCallWithVasco, 3000);
}

function startCallWithVasco(){
  document.location.href = "onCallVasco.html";
}

function hangUpVasco(){
  document.location.href = "hangUpVasco.html";
}

function hangUpTimerVasco(){
  setTimeout(endCallWithVasco, 1750);
}

function endCallWithVasco(){
  document.location.href = "profileVasco.html";
}


function callLe(){
  document.location.href = "callLe.html";
}

function callFriendLe(){
  setTimeout(startCallWithLe, 3000);
}

function startCallWithLe(){
  document.location.href = "onCallLe.html";
}

function hangUpLe(){
  document.location.href = "hangUpLe.html";
}

function hangUpTimerLe(){
  setTimeout(endCallWithLe, 1750);
}

function endCallWithLe(){
  document.location.href = "profileLe.html";
}

/*TESTE DE TIMER*/
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;

function startCounting(){
  setInterval(setTime, 1000);
}

function setTime(){
++totalSeconds;
secondsLabel.innerHTML = pad(totalSeconds%60);
minutesLabel.innerHTML = pad(parseInt(totalSeconds/60));
}

function pad(val){
  var valString = val + "";
  if(valString.length < 2){
    return "0" + valString;
  }
  else{
    return valString;
  }
}
/*TESTE TIMER*/
