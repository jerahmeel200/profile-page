const date = new Date();

let d = date.getDay();
switch (d) {
  case 1:
    document.getElementById("day").innerHTML = "Monday";
    break;

  case 2:
    document.getElementById("day").innerHTML = "Tuesday";
    break;

  case 3:
    document.getElementById("day").innerHTML = "Wednesday";
    break;

  case (d = 4):
    document.getElementById("day").innerHTML = "Thursday";
    break;

  case 5:
    document.getElementById("day").innerHTML = "Friday";
    break;

  case 6:
    document.getElementById("day").innerHTML = "Saturday";
    break;

  case 7:
    document.getElementById("day").innerHTML = "Sunday";
}

let h = date.getUTCHours();
let m = date.getUTCMinutes();
let s = date.getUTCSeconds();
let ml = date.getUTCMilliseconds();

let time = `${h} : ${m} : ${s} : ${ml}`;

document.getElementById("time").innerHTML = time;
