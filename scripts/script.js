// JavaScript Document
console.log("hi");

/*link van de code: https://codepen.io/shooft/pen/GRxXboQ */

/******************************/
/* menu openen de MENU button */
/******************************/

// de menu-button wordt opgezocht in de html en opgeslagen in een variabele
var openButton = document.querySelector("header button");

// de menu-button luisterd naar de kliks en voert daarna een functie uit 
openButton.addEventListener("click", openMenu);

// in de functie wordt er een class toegevoegd aan de nav
function openMenu() {  
  // zoekt de nav op
  var deNav = document.querySelector("nav");
  // voegt class toe aan nav
  deNav.classList.add("ToonMenu");
}

/************************************/
/* menu sluiten met de sluit button */
/************************************/
// de sluit-button wordt opgezocht in de html
var sluitButton = document.querySelector("nav button");

// button luisterd naar kliks
sluitButton.addEventListener("click", sluitMenu);

// in de functie wordt de class van de nav verwijderd
function sluitMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.remove("ToonMenu");
}

/**********************************/
/* bonus: menu sluiten met escape */
/**********************************/
// window staat voor browservenster en het luisterd naar de toetsenbord wanneer een functie moet worden uitgevoerd als keydown wordt ingedrukt
window.addEventListener("keydown", handleKeydown);

// als er op escape wordt gedrukt, dan sluit de hamburger menu
function handleKeydown(event) {
  if (event.key == "Escape") {
    var deNav = document.querySelector("nav");
    deNav.classList.remove("ToonMenu");
  }
}

/*Link van de code: https://codepen.io/robertspier/pen/GRGzYEG */
// Gebruik selectorAll ipv Selector om alle details in een variabele te stoppen, een array wordt dit.
const details = document.querySelectorAll('details');

// Luister naar het groter of kleiner worden van je scherm
window.addEventListener('resize', onResize);

// Als je schermgrootte verandert:
function onResize(e) {

	// Kijk of het scherm groter is dan 700 pixels
	if(window.innerWidth > 700) {
		
		// if so, doe dan voor elk detail:
		details.forEach(detail => {
			
			// het attribuut open = true
			detail.open = true;
		})
	} else {
		details.forEach(detail => {
			// en andersom als ie kleiner is doen we false, dus dicht
			detail.open = false;
		})
	}
}

// Voer 'm altijd uit als de pagina is geladen zodat ie gelijk openklapt op desktop
window.addEventListener('DOMContentLoaded', onResize)