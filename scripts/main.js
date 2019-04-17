var modal = document.getElementById('milkmodal');
var btn = document.getElementById("milkBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
  btn.style.color = "rgb(128, 0, 128)"
} 
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}