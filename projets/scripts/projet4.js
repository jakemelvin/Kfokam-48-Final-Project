var choixOrdinateur = document.getElementById('choix-ordinateur');
var choixUtilisateur = document.getElementById('choix-utilisateur');
var resultat = document.getElementById('resultat');
var choix = document.querySelectorAll("button");
let choiUtilisateur;
let result;
choix.forEach(choi => choi.addEventListener('click', (e) => {
    choiUtilisateur = e.target.id;
    choixUtilisateur.innerHTML = `<img src="../assets/${e.target.id}.png" alt="Une image de ${e.target.id}">`;
    choixOrdi();
    verification();
}));
let choiOrdi;
function choixOrdi() {
    random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) {
        choiOrdi = "pierre";
        choixOrdinateur.innerHTML = `<img src="../assets/pierre.png" alt="Une image de pierre">`;
    }
    if (random === 2) {
        choiOrdi = "papier";
        choixOrdinateur.innerHTML = `<img src="../assets/papier.png" alt="Une image de papier">`;
    }
    if (random === 3) {
        choiOrdi = "ciseaux";
        choixOrdinateur.innerHTML = `<img src="../assets/ciseaux.png" alt="Une image de ciseaux">`;
    }
}

function verification() {
    if (choiUtilisateur == choiOrdi) {
        result = "Égalité!";
    }
    if (choiUtilisateur == "pierre" && choiOrdi == "papier") {
        result = "Perdu!";
    }
    if (choiUtilisateur == "papier" && choiOrdi == "ciseaux") {
        result = "Perdu!";
    }
    if (choiUtilisateur == "ciseaux" && choiOrdi == "pierre") {
        result = "Perdu!";
    }
    if (choiUtilisateur == "pierre" && choiOrdi == "ciseaux") {
        result = "Gagné!";
    }
    if (choiUtilisateur == "papier" && choiOrdi == "pierre") {
        result = "Gagné!";
    }
    if (choiUtilisateur == "ciseaux" && choiOrdi == "papier") {
        result = "Gagné!";
    }
    resultat.innerHTML = result;
}