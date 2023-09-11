document.getElementById("day").innerHTML = new Date().toLocaleString(
  "default",
  { weekday: "long" }
);
const d = new Date();
let ms = d.getUTCMilliseconds();
document.getElementById("time").innerHTML = ms;
