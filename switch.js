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
  setTimeout(goToRealVitalsScreen, 5000);
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

function goToDateAndTime(){
  document.location.href = "dateAndTime.html";
}

function goToPointsOfInterest(){
  document.location.href = "pointsOfInterest.html";
}
