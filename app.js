const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const todayDate = new Date();
const currentDayOfWeek = weekday[todayDate.getDay()];
document.getElementById("today").textContent = currentDayOfWeek;

function refreshTime() {
  const currentUTCTimeMilliseconds = Date.now();
  const utcTime = document.getElementById("utctime");
  document.getElementById("utctime").textContent = currentUTCTimeMilliseconds;
  console.log(utcTime);
}
setInterval(refreshTime, 100);
