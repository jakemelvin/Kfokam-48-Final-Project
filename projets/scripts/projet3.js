let perso = document.querySelector(".perso");
var obstacles = document.querySelector(".obstacle");
function sauter() {
  if (perso.classList != "animation") {
    perso.classList.add("animation");
  }
  setTimeout(function () {
    perso.classList.remove("animation");
  }, 500);
}

var verification = setInterval(function () {
  let persoTop = parseInt(
    window.getComputedStyle(perso).getPropertyValue("top")
  );
  let obstacleLeft = parseInt(
    window.getComputedStyle(obstacles).getPropertyValue("left")
  );
  if (obstacleLeft < 32 && obstacleLeft > 0 && persoTop >= 130) {
    obstacles.style.animation = "none";
    alert("Vous avez perdu monsieur!");
  }
}, 1);
