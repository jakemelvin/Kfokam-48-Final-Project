let nb1 = document.querySelector(".nb1");
let nb2 = document.querySelector(".nb2");
let op = document.querySelector(".op");
let message = document.querySelector(".message");
let score = document.querySelector(".score");
let link = document.querySelector(".link");
let section = document.querySelector(".app__body-jeu");
var compteur = 0;

random1 = (Math.random() * 11) << 0;
random2 = (Math.random() * 11) << 0;

nb1.innerHTML = random1;
nb2.innerHTML = random2;

function verification() {
  let res = document.querySelector(".res").value;
  if (random1 + random2 == res) {
    message.style.background = "green";
    message.innerHTML = "Correct";
    random1 = (Math.random() * 11) << 0;
    random2 = (Math.random() * 11) << 0;
    nb1.innerHTML = random1;
    nb2.innerHTML = random2;
    document.querySelector(".res").innerHTML = "";
    compteur++;
  } else {
    message.style.background = "red";
    message.innerHTML = "Vous avez perdu!";
    section.innerHTML = " ";
    score.innerHTML = `<span>${compteur}</span><br> Score`;
    link.style.display = "block";
  }
}
