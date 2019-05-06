var mmodal = document.getElementById('milkmodal');
var mbtn = document.getElementById("milkBtn");
var mspan = document.getElementsByClassName("close")[0];

mbtn.onclick = function () {
  mmodal.style.display = "block";
  mbtn.style.color = "rgb(128, 0, 128)"
}
mspan.onclick = function () {
  mmodal.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == mmodal) {
    mmodal.style.display = "none";
  }
}

function main() {
  alert(popup)
}
