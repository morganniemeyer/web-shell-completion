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

let pick = getRandomItem(pearls);
/* Actions */
function loadPage() {
    displayShells();
    displayGuess();
}

function displayShells(userGuess) {
    gameState = 'results';
    guess = userGuess;
    pick = getRandomItem(pearls);
    displayPearl();
    displayGuess();
}

/* Components */

function displayPearl() {
    if (gameState === 'results') {
        if (pick === 'pearl1') {
            pearl1.classList.remove('hidden');
        } else {
            if (pick === 'pearl2') {
                pearl2.classList.remove('hidden');
            } else {
                pick === 'pearl3';
                pearl3.classList.remove('hidden');
            }
        }
    }
}
/* Component */
// get DOM

const guess1 = document.getElementById('guess-1');
const guess2 = document.getElementById('guess-2');
const guess3 = document.getElementById('guess-3');

// display

function displayGuess() {
    if (gameState === 'results') {
        if (guess === 'guess1') {
            shell1.classList.add('reveal');
        } else {
            if (guess === 'guess2') {
                shell2.classList.add('reveal');
            } else {
                guess === 'guess3';
                shell3.classList.add('reveal');
            }
        }
    }
}
// event listeners

/* Run page load code */
loadPage();
