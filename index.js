function openProjects(evet, name) {
  let i,
    tabLinks,
    ecranProjet,
    ecranPhoto,
    ecranDescription,
    active,
    boutonHam,
    boutonClose,
    menu,
    conteneurDescription,
    descriptionProjet;
  tabLinks = document.getElementsByClassName("tab-links");
  ecranPhoto = document.querySelector(".app__body-profile");
  ecranDescription = document.querySelector(".app__body-infos");
  boutonHam = document.querySelector("#hamburger-menu");
  boutonClose = document.querySelector("#close-menu");
  conteneurDescription = document.querySelector(
    ".app__body-container-features"
  );
  descriptionProjet = document.querySelector(
    ".app__body-container-features_name"
  );
  switch (name) {
    case "projets/projet1.html":
      descriptionProjet.innerText = "Chronomètre";
      break;
    case "projets/projet2.html":
      descriptionProjet.innerText = "To-Do List";
      break;
    case "projets/projet3.html":
      descriptionProjet.innerText = "Jeu de saut";
      break;
    case "projets/projet4.html":
      descriptionProjet.innerText = "Pierre-Papier-Ciseaux";
      break;
    case "projets/projet5.html":
      descriptionProjet.innerText = "Vérificateur de mot de passe";
      break;
    case "projets/projet6.html":
      descriptionProjet.innerText = "Jeu de calcul";
      break;
    case "projets/projet7.html":
      descriptionProjet.innerText = "Générateur de code barre";
      break;
    case "projets/projet8.html":
      descriptionProjet.innerText = "Générateur de mot de passe";
      break;
    case "projets/projet9.html":
      descriptionProjet.innerText = "Raccourcisseur de lien";
      break;
    case "projets/projet10.html":
      descriptionProjet.innerText = "Création d'onglets";
      break;
    case "projets/projet11.html":
      descriptionProjet.innerText = "Calculatrice";
      break;
  }
  conteneurDescription.style.display = "flex";
  boutonHam.style.display = "block";
  boutonClose.style.display = "none";
  ecranProjet = document.querySelector(".app__body-features");
  menu = document.querySelector(".app__header-smallscreen-links-container");
  menu.style.display = "none";
  ecranProjet.style.display = "block";
  ecranPhoto.style.display = "none";
  ecranDescription.style.display = "none";
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }
  console.log(name);
  ecranProjet.src = name;
  active = document.getElementById(name);
  active.className += " active";
}

function returnHome() {
  ecranPhoto = document.querySelector(".app__body-profile");
  ecranDescription = document.querySelector(".app__body-infos");
  ecranProjet = document.querySelector(".app__body-features");
  tabLinks = document.getElementsByClassName("tab-links");
  conteneurDescription = document.querySelector(
    ".app__body-container-features"
  );
  conteneurDescription.style.display = "none";
  ecranProjet.style.display = "none";
  ecranDescription.style.display = "block";
  ecranPhoto.style.display = "block";
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }
}

function openMenu() {
  let boutonHam, boutonClose;
  boutonHam = document.querySelector("#hamburger-menu");
  boutonClose = document.querySelector("#close-menu");
  let menu = document.querySelector(".app__header-smallscreen-links-container");
  menu.style.display = "flex";
  boutonHam.style.display = "none";
  boutonClose.style.display = "block";
}
function closeMenu() {
  let boutonHam, boutonClose;
  boutonHam = document.querySelector("#hamburger-menu");
  boutonClose = document.querySelector("#close-menu");
  let menu = document.querySelector(".app__header-smallscreen-links-container");
  menu.style.display = "none";
  boutonHam.style.display = "block";
  boutonClose.style.display = "none";
}
