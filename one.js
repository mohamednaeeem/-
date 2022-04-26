//لوحة العمل
var accordion = document.getElementsByClassName("acc-titel");
var i;

for (i = 0; i < accordion.length; i++) {
accordion[i].addEventListener("click", function(){
this.classList.toggle("active");
    
var showContent = this.nextElementSibling;
if (showContent.style.maxHeight) {
showContent.style.maxHeight = null;
showContent.style.opacity = null;
showContent.style.transform = "translateY(5px)";
} else {
showContent.style.maxHeight = showContent.scrollHeight + "px";
showContent.style.opacity = "1";
showContent.style.transform = "translateY(0px)";
}
});
}
//المود اليلي
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

//الزر الجانبي
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

//الساعة والتاريخ
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

(function() {
  'use strict';

  function getDate() {
    var date = new Date();
    var weekday = date.getDay();
    var month = date.getMonth();
    var day = date.getDate();
    var year = date.getFullYear();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    if (hour < 10) hour = "0" + hour;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    var monthNames = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

    var weekdayNames = ["الاحد", "الاثنيين", "الثلاثاء", "الاربعاء", "الخميس", "الجمعة", "السبت"];
    
    var monthColors = ["#1E90FF", "#FF69B4", "#00FFFF", "#7CFC00", "#00CED1", "#FF1493", "#00008B", "#FF7F50", "#C71585", "#FF4500", "#FFD700", "#800000"]

    var ampm = " /مسائا";

    if (hour < 12) ampm = " /صباحا ";

    if (hour > 12) hour -= 12;

    var showDate = weekdayNames[weekday] + ", " + monthNames[month] + " " + day + ", " + year;

    var showTime = hour + ":" + minutes + ":" + seconds + ampm;
    
    var color = monthColors[month];

    document.getElementById('date').innerHTML = showDate;

    document.getElementById('time').innerHTML = showTime;
    
    document.bgColor = color;
    

    requestAnimationFrame(getDate);
  }

  getDate();

}());