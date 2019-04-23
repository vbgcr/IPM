function getTime(){
  var watch = new Date();
  var h = watch.getHours();
  var m = watch.getMinutes();
  var month = watch.getMonth() + 1;
  var day = watch.getDate();
  month = transformMonth(month);
  h = checkTime(h);
  m = checkTime(m);
  var el = document.getElementById("time");
  el.innerHTML = day + " " + month + " " + h + ":" + m;
  var t = setTimeout(getTime, 500);
}

function getTimeWhite(){
  var watch = new Date();
  var h = watch.getHours();
  var m = watch.getMinutes();
  var month = watch.getMonth() + 1;
  var day = watch.getDate();
  month = transformMonth(month);
  h = checkTime(h);
  m = checkTime(m);
  var el = document.getElementById("time2");
  el.innerHTML = day + " " + month + " " + h + ":" + m;
  var t = setTimeout(getTime, 500);
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
    return "FEB";
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
