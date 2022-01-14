/*
  * @package Food Circles
  * Main JS
*/

// Hamburger Navigation
var hamburgerIcon = document.getElementById("hamburger__icon");
var body = document.getElementsByTagName("body")[0];

function Hamburger() {
  if (body.classList.contains("hamburger__open")) {
    body.classList.remove("hamburger__open");
    hamburgerIcon.innerHTML = "<i class='fas fa-bars'></i>";
  } else {
    body.classList.add("hamburger__open");
    hamburgerIcon.innerHTML = "<i class='fal fa-times'></i>";
  }
}

hamburgerIcon.addEventListener("click", function () {
  Hamburger();
});