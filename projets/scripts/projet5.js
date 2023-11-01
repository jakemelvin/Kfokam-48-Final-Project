let myInput = document.getElementById("psw");
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");

myInput.onfocus = function () {
  document.getElementById("message").style.display = "block";
};

myInput.onblur = function () {
  document.getElementById("message").style.display = "none";
};
myInput.onkeyup = function () {
  let lowerCaseLetters = /[a-z]/g;
  if (myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("inavlid");
    letter.classList.add("valid");
  } else {
    letter.classList.add("inavlid");
    letter.classList.remove("valid");
  }
  let upperCaseLetters = /[A-Z]/g;
  if (myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("inavlid");
    capital.classList.add("valid");
  } else {
    capital.classList.add("inavlid");
    capital.classList.remove("valid");
  }
  let numberLetters = /[0-9]/g;
  if (myInput.value.match(numberLetters)) {
    number.classList.remove("inavlid");
    number.classList.add("valid");
  } else {
    number.classList.add("inavlid");
    number.classList.remove("valid");
  }
  if (myInput.value.length >= 8) {
    length.classList.remove("inavlid");
    length.classList.add("valid");
  } else {
    length.classList.add("inavlid");
    length.classList.remove("valid");
  }
};
