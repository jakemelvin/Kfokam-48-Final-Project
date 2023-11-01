let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("containerToDo");
let inputField = document.getElementById("inputField");

addToDoButton.onclick = function () {
    if (inputField.value != "") {
        var paragraphe = document.createElement('p');
    }
    paragraphe.innerText = inputField.value;
    paragraphe.classList.add("paragraphe_style");
    toDoContainer.appendChild(paragraphe);
    inputField.value = "";
    paragraphe.addEventListener('click', function () {
        paragraphe.classList.add('paragraph_click')
    });
    paragraphe.addEventListener('dblclick', function () {
        toDoContainer.removeChild(paragraphe);
    })
}