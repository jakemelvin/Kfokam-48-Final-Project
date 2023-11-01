let calculAfficheur = 0;
let resultatAfficheur;
let operateur;
let overwrite;
let afficheResultat = document.querySelector(".resultat-afficheur");
let afficheCalcul = document.querySelector(".calcul-afficheur");
afficheCalcul.innerText = 0;

function chooseOperation(op) {
  
  console.log(operateur);
  if (calculAfficheur == null && resultatAfficheur == null) {
    console.log("Rien à calculer");
    return;
  }
  if (calculAfficheur == null) {
    console.log("Choses a calculer deja dans le resultats");
    operateur = `${operateur}${op}`;
    afficheResultat.innerText = `${resultatAfficheur} ${operateur}`;
    return;
  }
  if (resultatAfficheur == null) {
    resultatAfficheur = calculAfficheur;
    calculAfficheur = null;
    operateur = op;
    afficheCalcul.innerText = "";
    afficheResultat.innerText = `${resultatAfficheur} ${operateur}`;
    return;
  }
  operateur = op;
  resultatAfficheur = evaluer(calculAfficheur, resultatAfficheur, operateur);
  calculAfficheur = null;
  afficheCalcul.innerText = ``;
  afficheResultat.innerText = `${resultatAfficheur} ${op}`;
}

function evaluer(calcul, result, op) {
  const apres = parseFloat(calcul);
  let newOP = "";
  let mapOP = [];
  const avant = parseFloat(result);
  if ((isNaN(avant), isNaN(apres))) {
    return "";
  }
  let computation = "";
  for (let i = 0; i < op.length; i++) {
    mapOP.push(op[i]);
  }
  if (mapOP.length == 1) {
    switch (mapOP[0]) {
      case "+":
        computation = avant + apres;
        break;
      case "/":
        computation = avant / apres;
        break;
      case "x":
        computation = avant * apres;
        break;
      case "-":
        computation = avant - apres;
        break;
    }
  } else {
    if (mapOP[mapOP.length - 1] == "-") {
      newOP = op[op.length - 2];
      switch (mapOP[mapOP.length - 2]) {
        case "+":
          computation = avant + -apres;
          break;
        case "/":
          computation = avant / -apres;
          break;
        case "x":
          computation = avant * -apres;
          break;
        case "-":
          computation = avant - -apres;
          break;
      }
    } else {
      newOP = mapOP[mapOP.length - 1];
      console.log(mapOP[mapOP.length - 1]);
      switch (newOP) {
        case "+":
          computation = avant + apres;
          break;
        case "/":
          computation = avant / apres;
          break;
        case "x":
          computation = avant * apres;
          break;
        case "-":
          computation = avant - apres;
          break;
      }
    }
  }

  return computation.toString();
}
function equal() {
  if (
    calculAfficheur == null ||
    resultatAfficheur == null ||
    operateur == null
  ) {
    return;
  }
  overwrite = true;
  calculAfficheur = evaluer(calculAfficheur, resultatAfficheur, operateur);
  operateur = null;
  resultatAfficheur = null;
  afficheCalcul.innerText = `${calculAfficheur}`;
  afficheResultat.innerText = ``;
}
function clearScreen() {
  calculAfficheur = "0";
  operateur = null;
  resultatAfficheur = null;
  afficheCalcul.innerText = "0";
  afficheResultat.innerText = ``;
}
function addingDigit(digit) {
  if (overwrite) {
    calculAfficheur = digit;
    overwrite = false;
    afficheCalcul.innerText = `${calculAfficheur}`;
    return;
  }
  if (digit === "0" && calculAfficheur === "0") {
    return;
  }
  if (digit === "." && calculAfficheur.includes(".")) {
    return;
  }
  calculAfficheur = `${calculAfficheur || ""}${digit}`;
  console.log(calculAfficheur);
  //   console.log(afficheCalcul);
  //   let courant = calculAfficheur;
  //   console.log(typeof calculAfficheur,courant)
  afficheCalcul.innerText = `${calculAfficheur}`;
  console.log(afficheCalcul);
}
function removeZero(string) {
  let newString = "";
  let stringArray = [];
  for (let i = 0; i < string.length; i++) {
    stringArray.push(string[i]);
  }
  if (stringArray[0] == "0") {
    for (let i = 1; i < stringArray.length; i++) {
      newString = newString + stringArray[i];
    }
  } else {
    for (let i = 0; i < stringArray.length; i++) {
      newString = newString + stringArray[i];
    }
  }

  return newString;
}