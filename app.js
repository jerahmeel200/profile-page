const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednessday",
  "Thursday",
  "Friday",
  "Saturday",
];
const d = new Date();
let day = days[d.getUTCDay()];
document.getElementById("day").innerHTML = day;

const b = Date.now();
document.getElementById("time").innerHTML = b;
