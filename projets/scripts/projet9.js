var error = document.querySelector(".error_message");
var longLink = document.querySelector(".long_link");
var result = document.querySelector(".result");

function shortLink() {
  if (!(longLink.value == "")) {
    error.innerHTML = "";
    let url = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(longLink.value)}`;
    fetch(url)
      .then((response) => response.text())
      .then((data) => (result.innerHTML = data));
    result.style.display = "block";
    if (result.innerHTML.length == 0) {
      result.innerHTML = "Lien invalide!";
    }
  } else {
    error.innerHTML = "Veuillez remplir le champ pour le lien!";
    result.style.display = "none";
  }
}
