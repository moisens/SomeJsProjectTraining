let showTime = () => {
   let date = new Date();
   let hours = date.getHours();
   let minutes = date.getMinutes();
   let seconds = date.getSeconds();
   //let milliseconds = date.getMilliseconds();

   let formatHours = convertFormat(hours);

   hours = checkTime(hours);
   hours = addZero(hours);
   minutes = addZero(minutes);
   seconds = addZero(seconds);
   //milliseconds = addZero(milliseconds);

   document.getElementById('clock').innerHTML = `${hours}:${minutes}:${seconds} ${formatHours}`

}

//The inial format of time = AM, The function convert the format from AM to PM if time >= 12
const convertFormat = (time) =>{
   let format = 'AM';
   if(time >= 12){
      format = 'PM';
   }
   return format;
}

//Check time
const checkTime = (time) => {
   if(time > 12){
      // time = time - 12;
      time = time;
   }

   if(time === 0){
      // time = 12
      time = 00;//Midnight
   }
   return time;
}


//Add zero to time
const addZero = (time) => {
   if(time < 10){
      time = 'O' + time;
   }
   return time;
}
showTime();//If not called before the setInterval, the clock wil display after 1s and during 1s there will be no clock displayed
setInterval(showTime, 1000);