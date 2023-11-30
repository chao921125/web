import Demo from "./Demo.js";

let elDiv = document.createElement("div");
elDiv.style.width = "100%";
elDiv.style.height = "100%";
elDiv.style.color = "#000";
elDiv.style.backgroundColor = "#00ff00";

// Class
const demo = new Demo(1, 2);
console.log(demo);

// C
function sum(x, y, n) {
  const toNum = Math.pow(10, n);
  return (x*toNum + y*toNum)/toNum;
}
elDiv.innerText = sum(0.2, 0.1, 1) + "---" + (0.1+0.2);


function Date(n) {
  return [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ][n % 7 || 0];
}
function runCodeWithDateFunction(obj) {
  return Function('"use strict";return (' + obj + ")")()(Date);
}
console.log(runCodeWithDateFunction("function(Date){ return Date(2) }"));
console.log(Date(1));

document.body.append(elDiv);
