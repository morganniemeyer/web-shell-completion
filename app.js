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
let disp1 = document.getElementById('display-1');
let disp2 = document.getElementById('display-2');
let disp3 = document.getElementById('display-3');

/* probability array */
const pearls = ['pearl1', 'pearl2', 'pearl3'];

let pick = getRandomItem(pearls);
/* Actions */
function displayShells() {
    shell1.classList.remove('reveal');
    shell2.classList.remove('reveal');
    shell3.classList.remove('reveal');
    pearl1.classList.add('hidden');
    pearl2.classList.add('hidden');
    pearl3.classList.add('hidden');
    disp1.innerHTML = '';
    disp2.innerHTML = '';
    disp3.innerHTML = '';
}

function loadPage() {
    displayShells();
}

function chooseShells(userGuess) {
    gameState = 'results';
    guess = userGuess;
    pick;
    displayPearl();
    displayGuess();
}

/* Components */

function displayPearl() {
    if (gameState === 'results') {
        if (pick === 'pearl1') {
            pearl1.classList.remove('hidden');
            shell1.classList.add('reveal');
        } else {
            if (pick === 'pearl2') {
                pearl2.classList.remove('hidden');
                shell2.classList.add('reveal');
            } else {
                pick === 'pearl3';
                pearl3.classList.remove('hidden');
                shell3.classList.add('reveal');
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
guess1.addEventListener('click', () => {
    chooseShells('guess1');
    if (pick === 'pearl1') {
        disp1.innerHTML = 'Found it!';
    } else {
        disp1.innerHTML = 'Not Here';
    }
});
guess2.addEventListener('click', () => {
    chooseShells('guess2');
    if (pick === 'pearl2') {
        disp2.innerHTML = 'Found it!';
    } else {
        disp2.innerHTML = 'Not Here';
    }
});
guess3.addEventListener('click', () => {
    chooseShells('guess3');
    if (pick === 'pearl3') {
        disp3.innerHTML = 'Found it!';
    } else {
        disp3.innerHTML = 'Not Here';
    }
});

let replay = document.getElementById('play-again-button');

function playAgain() {
    gameState = 'guess';
    loadPage();
}

replay.addEventListener('click', () => {
    playAgain();
});

/* Run page load code */
loadPage();
