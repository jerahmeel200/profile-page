// geting current weekday of the week
const weekList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const day = new Date();
let getDay = weekList[day.getDay()];
const currentWeekDay = document.querySelector("#currentDayOfTheWeek");
currentWeekDay.innerHTML += getDay;

//getting current UTC Time

const utc = new Date().getUTCMilliseconds();
const currentUTCTime = document.querySelector("#currentUTCTime");
currentUTCTime.innerHTML += utc;
