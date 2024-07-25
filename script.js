// script.js
function displayCurrentTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
  
    // 如果時、分、秒少於10,則在前面加上0
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
  
    var timeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById("time-display").textContent = timeString;
  }
  
  // 每隔1秒更新一次時間
  setInterval(displayCurrentTime, 1000);