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
let winCount = 0;
let lossCount = 0;
let totalCount = winCount + lossCount;

let buttons = document.getElementById('guesses');
/* probability array */
const pearls = ['pearl1', 'pearl2', 'pearl3'];

let pick = getRandomItem(pearls);
/* Actions */
function displayShells() {
    buttons.classList.remove('hidden');
    shell1.classList.remove('reveal');
    shell2.classList.remove('reveal');
    shell3.classList.remove('reveal');
    pearl1.classList.add('hidden');
    pearl2.classList.add('hidden');
    pearl3.classList.add('hidden');
    disp1.textContent = '';
    disp2.textContent = '';
    disp3.textContent = '';
}

function loadPage() {
    displayShells();
    displayScore();
}

function chooseShells(userGuess) {
    buttons.classList.add('hidden');
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

let wins = document.getElementById('wins-display');
let losses = document.getElementById('losses-display');
let total = document.getElementById('total-display');

function displayScore() {
    wins.textContent = winCount;
    losses.textContent = lossCount;
    total.textContent = totalCount;
}

// event listeners
guess1.addEventListener('click', () => {
    chooseShells('guess1');
    if (pick === 'pearl1') {
        winCount++;
        disp1.textContent = 'Found it!';
    } else {
        lossCount++;
        disp1.textContent = 'Not Here';
    }
    displayScore();
});
guess2.addEventListener('click', () => {
    chooseShells('guess2');
    if (pick === 'pearl2') {
        winCount++;
        disp2.textContent = 'Found it!';
    } else {
        lossCount++;
        disp2.textContent = 'Not Here';
    }
    displayScore();
});
guess3.addEventListener('click', () => {
    chooseShells('guess3');
    if (pick === 'pearl3') {
        winCount++;
        disp3.textContent = 'Found it!';
    } else {
        lossCount++;
        disp3.textContent = 'Not Here';
    }
    displayScore();
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
