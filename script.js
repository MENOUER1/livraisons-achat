"usestrict";

const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");
let li;


// creation des variables

function CreateElementLi() {
    li = document.createElement('li');
}


function ClearInput() {
    input.value = "";
}


function GetInputValueEnter(key) {
    if (key.keyCode === 13) {
        addItemOnMyTodo();
    }
}




function InsertLiInUL() {
    ul.insertAdjacentElement('beforeend', li);
}


function AddValueinLi() {
    li.append(document.createTextNode(input.value));
}



// creation des fonctions

function addItemOnMyTodo() {

    CreateLi();
    AddValueinLi();
    InsertLiInUL();
    ClearInput();
}
 // creation et cablage de la fonction globale

button.addEventListener("click", addItemOnMyTodo);
input.addEventListener("keypress", getInputValueEnter);
