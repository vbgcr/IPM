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

function goToCantinho2(){
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

function goToRestaurantsMap2(){
  document.location.href = "restaurantMap2.html"
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

function goToProfileAndreia1(){
  document.location.href = "profileAndreia.html";
}

function goToProfileLe(){
  document.location.href = "profileLe.html"
}

function goToProfileLe2(){
  document.location.href = "profileLe2.html"
}

function goToProfilePacheco(){
  document.location.href = "profilePacheco.html"
}

function goToProfilePacheco2(){
  document.location.href = "profilePacheco2.html"
}

function goToProfileJoao(){
  document.location.href = "profileJoao.html"
}

function goToProfileVasco(){
  document.location.href = "profileVasco.html"
}

function goToFriendMap1(){
  document.location.href = "friendMap1.html";
}

function goToFriendMap2(){
  document.location.href = "friendMap2.html";
}

function goToFriendMap3(){
  document.location.href = "friendMap3.html";
}

function goToFriendMap4(){
  document.location.href = "friendMap4.html";
}

function goToFriendMap5(){
  document.location.href = "friendMap5.html";
}

function goToBigMap(){
  document.location.href = "bigMap.html";
}

function addNewGroup(){
  if(sessionStorage.getItem("groupCounter") == 3){
    document.getElementById("group2").style.visibility = "visible";
    document.getElementById("group3").style.visibility = "visible";
    sessionStorage.setItem("groupCounter", 4);
  }

  else if(sessionStorage.getItem("groupCounter") == 4){
    document.getElementById("group2").style.visibility = "visible";
    document.getElementById("group3").style.visibility = "visible";
    document.getElementById("group4").style.visibility = "visible";
    sessionStorage.setItem("groupCounter", 5);
  }

  else if(sessionStorage.getItem("groupCounter") == 5){
    document.getElementById("group2").style.visibility = "visible";
    document.getElementById("group3").style.visibility = "visible";
    document.getElementById("group4").style.visibility = "visible";
    document.getElementById("group5").style.visibility = "visible";
    sessionStorage.setItem("groupCounter", 6);
  }

  else if(sessionStorage.getItem("groupCounter") == 6){
    sessionStorage.setItem("groupCounter", 7)
  }

  else{
    sessionStorage.setItem("groupCounter", 3);
    document.getElementById("group2").style.visibility = "visible";
  }
}

function checkGroups(){
  if(sessionStorage.getItem("groupCounter") == 3){
    document.getElementById("group2").style.visibility = "visible";
  }

  if(sessionStorage.getItem("groupCounter") == 4){
    document.getElementById("group2").style.visibility = "visible";
    document.getElementById("group3").style.visibility = "visible";
  }

  if(sessionStorage.getItem("groupCounter") == 5){
    document.getElementById("group2").style.visibility = "visible";
    document.getElementById("group3").style.visibility = "visible";
    document.getElementById("group4").style.visibility = "visible";
  }

  if(sessionStorage.getItem("groupCounter") == 6){
    document.getElementById("group2").style.visibility = "visible";
    document.getElementById("group3").style.visibility = "visible";
    document.getElementById("group4").style.visibility = "visible";
    document.getElementById("group5").style.visibility = "visible";
  }

  if(sessionStorage.getItem("groupCounter") == 7){
    document.getElementById("group2").style.visibility = "visible";
    document.getElementById("group3").style.visibility = "visible";
    document.getElementById("group4").style.visibility = "visible";
    document.getElementById("group5").style.visibility = "visible";
  }
}

function checkGroupNumber(){
  if(sessionStorage.getItem("groupCounter") == 3){
    document.getElementById("GroupsTwo").style.visibility = "visible";
  }

  else if(sessionStorage.getItem("groupCounter") == 4){
    document.getElementById("GroupsThree").style.visibility = "visible";
  }

  else if(sessionStorage.getItem("groupCounter") == 5){
    document.getElementById("GroupsFour").style.visibility = "visible";
  }

  else if(sessionStorage.getItem("groupCounter") == 6){
    document.getElementById("GroupsFive").style.visibility = "visible";
  }

  else if(sessionStorage.getItem("groupCounter") == 7){
    document.getElementById("GroupsFive").style.visibility = "visible";
  }

  else{
    document.getElementById("GroupsOne").style.visibility = "visible";
  }
}

function goToYourGroup0(){
  document.location.href = "pachecoGroup.html"
}

function goToYourGroup1(){
  document.location.href = "yourGroup1.html"
}

function goToYourGroup2(){
  document.location.href = "yourGroup2.html"
}

function goToYourGroup3(){
  document.location.href = "yourGroup3.html"
}

function goToYourGroup4(){
  document.location.href = "yourGroup4.html"
}

function showMembers1(){
  if(document.getElementById("secondaryScreenMembers1").style.visibility == "visible"){
    document.getElementById("secondaryScreenMembers1").style.visibility = "hidden";
  }
  else{
    document.getElementById("secondaryScreenMembers1").style.visibility = "visible";
  }
}

function showMembers2(){
  if(document.getElementById("secondaryScreenMembers2").style.visibility == "visible"){
    document.getElementById("secondaryScreenMembers2").style.visibility = "hidden";
  }
  else{
    document.getElementById("secondaryScreenMembers2").style.visibility = "visible";
  }
}

function showMembers3(){
  if(document.getElementById("secondaryScreenMembers3").style.visibility == "visible"){
    document.getElementById("secondaryScreenMembers3").style.visibility = "hidden";
  }
  else{
    document.getElementById("secondaryScreenMembers3").style.visibility = "visible";
  }
}

function showMembers4(){
  if(document.getElementById("secondaryScreenMembers4").style.visibility == "visible"){
    document.getElementById("secondaryScreenMembers4").style.visibility = "hidden";
  }
  else{
    document.getElementById("secondaryScreenMembers4").style.visibility = "visible";
  }
}

function showMembers0(){
  if(document.getElementById("secondaryScreenMembers0").style.visibility == "visible"){
    document.getElementById("secondaryScreenMembers0").style.visibility = "hidden";
  }
  else{
    document.getElementById("secondaryScreenMembers0").style.visibility = "visible";
  }
}

function goToMeetingPoint1(){
  document.location.href = "meetingPoint1.html"
}

function goToMeetingPoint2(){
  document.location.href = "meetingPoint2.html"
}

function goToMeetingPoint3(){
  document.location.href = "meetingPoint3.html"
}

function goToMeetingPoint4(){
  document.location.href = "meetingPoint4.html"
}

function goToMeetingPoint0(){
  document.location.href = "meetingPoint0.html"
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

function callLe(){
  document.location.href = "callLe.html";
}

function callVasco(){
  document.location.href = "callVasco.html";
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
