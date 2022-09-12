/*Imports;*/
import { getRandomItem } from './utils.js';

/* State */
let gameState = 'guess';
let guess = '';
let shell1 = document.getElementById('shell-1');
let shell2 = document.getElementById('shell-2');
let shell3 = document.getElementById('shell-3');
let pearl1 = document.getElementById('pearl-1');
let pearl2 = document.getElementById('pearl-2');
let pearl3 = document.getElementById('pearl-3');

/* probability array */
const pearls = ['pearl1', 'pearl2', 'pearl3'];

/* Actions */
function loadPage() {
    displayShells();
}

function displayShells() {}

function guessShells(userGuess) {
    gameState = 'results';
    guess = userGuess;
    pick = getRandomItem(pearls);
}

/* Components */

/* Component */
// get DOM
// display
// event listeners

/* Run page load code */
loadPage();
