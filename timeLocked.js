function getTimeLocked(){
  var watchLocked = new Date();
  var hlocked = watchLocked.getHours();
  var mlocked = watchLocked.getMinutes();
  hlocked = checkTime(hlocked);
  mlocked = checkTime(mlocked);
  var ellocked = document.getElementById("timeLocked");
  ellocked.innerHTML = hlocked + ":" + mlocked;
}

function getDateLocked(){
  var watchLocked = new Date();
  var monthlocked = watchLocked.getMonth() + 1;
  var daylocked = watchLocked.getDate();
  monthlocked = transformMonth(monthlocked);
  var ellocked = document.getElementById("dateLocked");
  ellocked.innerHTML = daylocked + " " + monthlocked;
}

function checkTime(i){
  if (i < 10) i = "0" + i;
  return i;
}

function transformMonth(month){
  if(month == 1){
     return "JAN";
  }

  else if(month == 2){
    return "FEV";
  }

  else if(month == 3){
    return "MAR";
  }

  else if(month == 4){
    return "APR";
  }

  else if(month == 5){
    return "MAY";
  }

  else if(month == 6){
    return "JUN";
  }

  else if(month == 7){
    return "JUL";
  }

  else if(month == 8){
    return "AUG";
  }

  else if(month == 9){
    return "SEP";
  }

  else if(month == 10){
    return "OUT";
  }

  else if(month == 11){
    return "NOV";
  }

  else if(month == 12){
    return "DEZ";
  }
}
