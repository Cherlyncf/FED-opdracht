// JavaScript Document
console.log("hi");
/*link van de code: https://codepen.io/shooft/pen/GRxXboQ */
/******************************/
/* menu openen de MENU button */
/******************************/

var openButton = document.querySelector("header button");

openButton.addEventListener("click", openMenu);

function openMenu() {  
  // zoek de nav op
  var deNav = document.querySelector("nav");
  // voeg class toe aan nav
  deNav.classList.add("toonMenu");
}
/************************************/
/* menu sluiten met de sluit button */
/************************************/
// zoek sluiten button op
var sluitButton = document.querySelector("nav button");

// button luisterd naar kliks
sluitButton.addEventListener("click", sluitMenu);

// in de functie verwijder de class van de nav
function sluitMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.remove("toonMenu");
}
/**********************************/
/* bonus: menu sluiten met escape */
/**********************************/
window.addEventListener("keydown", handleKeydown);

function handleKeydown(event) {
  if (event.key == "Escape") {
    var deNav = document.querySelector("nav");
    deNav.classList.remove("toonMenu");
  }
}