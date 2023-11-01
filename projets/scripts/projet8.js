let copyButton = document.getElementById('copy');

function getPassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 16;
    var password ="";
    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars[randomNumber];
    }
    document.getElementById('password').value = password;
    copyButton.style.background = "#6c757d"
    copyButton.style.color = "#fff";
}

function copier() {
    var inputPassword = document.getElementById('password');
    if (inputPassword.value.length == 16) {
        inputPassword.select();
        document.execCommand("copy");
        copyButton.style.background = "transparent";
        copyButton.style.color = "#000";
        alert('Mot de passe copié!');
    } else {
        alert('Veuillez générer un mot de passe!')
    }
}