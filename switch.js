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

function goToBarScreen(){
  document.location.href = "bars.html";
}

function goToTransportsScreen(){
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