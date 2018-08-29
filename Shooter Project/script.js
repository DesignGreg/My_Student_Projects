/* A FAIRE */

// Bouton Start Game, fin de partie = "Try Again", et relance une partie. Clignote comme le temps survécu









window.onload = build;

/* Variables*/
var zombie;
var timer;
var invasion;
var score = 10;
var kill = true;
var startTime;
var endTime;

/* Add event listener 'click' on gameboard__zombie, call hitzombie() which is set to false */
function build() {
    zombie = document.querySelectorAll('.gameboard__zombie');
    for (var x = 0; x < zombie.length; x++) {
        zombie[x].addEventListener('click', hitzombie, false);
    }
}

/*
var z0 = document.getElementById('zombie0');
var z1 = document.getElementById('zombie1');
var z2 = document.getElementById('zombie2');
var z3 = document.getElementById('zombie3');
var z4 = document.getElementById('zombie4');
var z5 = document.getElementById('zombie5');
var z6 = document.getElementById('zombie6');
var z7 = document.getElementById('zombie7');
var z8 = document.getElementById('zombie8');
var z9 = document.getElementById('zombie9');

var zombies = [z0, z1, z2, z3, z4, z5, z6, z7, z8, z9,];
*/

function popup() {
    kill = true;
    invasion = zombie[Math.floor(Math.random() * zombie.length)];
    invasion.classList.add('zombie--popup');
    var zTime = 1200;
    timer = setTimeout(hidezombie, zTime);
}

function popupFast() {
    kill = true;
    invasion = zombie[Math.floor(Math.random() * zombie.length)];
    invasion.classList.add('zombie--popup');
    var zTime = 1000;
    timer = setTimeout(hidezombie, zTime);
}

function popupFaster() {
    kill = true;
    invasion = zombie[Math.floor(Math.random() * zombie.length)];
    invasion.classList.add('zombie--popup');
    var zTime = 850;
    timer = setTimeout(hidezombie, zTime);
}

function hidezombie() {
    if (score > 0) {
        invasion.classList.remove('zombie--popup');
        kill = false;

        if (score >= 7) {
            popup();
        } else if (score >= 4 && score < 7) {
            popupFast();
        } else if (score < 4) {
            popupFaster();
        }
        weapon();
        theme();
        score--;
        score = score;
        document.querySelector('.score__counter__number').innerHTML = score;
    } else {
        end();
    }

}

// Remove the zombie, kill = false to avoid multiply clicks, score +1, call popup() to create a new zombie
function hitzombie() {
    if (score > 0) {
        event.target.classList.remove('zombie--popup');
        if (kill) {
            hit();
            kill = false;
            score++;
            score = score;
        }
    } else {
        end();
    }
}

/* Switch weapon image depending on the score */
function weapon() {
    if (score > 4 && score <= 7) {
        swap("images/DarylCrossbow.png");
    } else if (score <= 4) {
        swap("images/NeganBat.png");
    }
}

function swap(imgName) {
    document.getElementById("weapon__image").src = imgName;
}

/* End the game */
function end() {

    invasion.classList.remove('zombie--popup');

    //document.getElementById('score-button').setAttribute('style', 'visibility:hidden');
    document.getElementById('score-button').value = 'Try Again';

    var tryAgain = document.getElementById('score-button');
    tryAgain.addEventListener('click', function () {
        location.reload();
    }, {
        once: true
    });

    document.querySelector('.score__survive').style.color = 'darkgreen';


    var blinkSpeed = 500;
    var blinkInterval = setInterval(function () {
        var ele = document.querySelector('.score__survive');
        ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
    }, blinkSpeed);

    setTimeout(location.reload.bind(location), 10000);
}


function theme() {
    if (score <= 3) {
        var theme = document.getElementById('sound0');
        theme.play();
    }
}

function hit() {
    if (score >= 7) {
        var shoot = document.getElementById('sound1');
        shoot.preload = "auto";
        shoot.load();
        shoot.play();
        shoot.currentTime = 0;
        shoot.play();
    } else if (score >= 4 && score < 7) {
        shoot = document.getElementById('sound2');
        shoot.preload = "auto";
        shoot.load();
        shoot.play();
        shoot.currentTime = 0;
        shoot.play();
    } else if (score < 4) {
        shoot = document.getElementById('sound3');
        shoot.preload = "auto";
        shoot.load();
        shoot.play();
        shoot.currentTime = 0;
        shoot.play();
    }
}

var startButton = document.getElementById('score-button');
startButton.addEventListener('click', function () {
    startTimer();
    popup();
}, {
    once: true
});

// Timer from start game
function startTimer() {
    var seconds = 0;
    var timer = setInterval(function () {
        seconds++;
        if (score === 0) {
            clearInterval(timer);
        }
        document.querySelector('.score__survive__seconds').innerHTML = seconds % 60;
        document.querySelector('.score__survive__minutes').innerHTML = parseInt(seconds / 60);
    }, 1000);
}