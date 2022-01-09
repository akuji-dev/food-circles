/*
  * @package Food Circles
  * Main JS
*/

// Hamburger Navigation
var hamburgerIcon = document.getElementById("hamburger-icon");
var body = document.getElementsByTagName("body")[0];

function Hamburger() {
  if (body.classList.contains("hamburger-open")) {
    body.classList.remove("hamburger-open");
    hamburgerIcon.innerHTML = "<i class='fas fa-bars'></i>";
  } else {
    body.classList.add("hamburger-open");
    hamburgerIcon.innerHTML = "<i class='fal fa-times'></i>";
  }
}

hamburgerIcon.addEventListener("click", function () {
  Hamburger();
});