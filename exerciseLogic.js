// basic adjustments - display player fields

let rollDicePlayer1 = document.getElementById("button-player1");
let rollDicePlayer2 = document.getElementById("button-player2");
let rollDicePlayer3 = document.getElementById("button-player3");
let rollDicePlayer4 = document.getElementById("button-player4");

rollDicePlayer1.disabled = true;
rollDicePlayer2.disabled = true;
rollDicePlayer3.disabled = true;
rollDicePlayer4.disabled = true;


// basic adjustments - info-field

document.getElementById("allgemein2").style.display="none";
document.getElementById("allgemein3").style.display="none";
document.getElementById("allgemein4").style.display="none";
document.getElementById("allgemein5").style.display="none";
document.getElementById("new-game").style.display = "none";


let playersButton = document.getElementById ("ok-button-players");
let roundsButton = document.getElementById ("ok-button-rounds");
let nextButton1 = document.getElementById ("button-next1");
let nextButton2 = document.getElementById ("button-next2");
let numberOfPlayers;
let numberOfPlayersFirstChoice;

let numberOfRounds;


nextButton1.disabled = true;
nextButton2.disabled = true;

function wahlwiederholung () {
    nextButton1.disabled = true;
    nextButton2.disabled = true;
 }


// selection "number of players"

function numberPlayers () {
    numberOfPlayers = document.getElementById("select-players").value;
    numberOfPlayersFirstChoice = document.getElementById("select-players").value;

    nextButton1.disabled = false;
    console.log("numberOfPlayers: " + numberOfPlayers);
    console.log("numberOfPlayersFirstChoice:" + numberOfPlayersFirstChoice);

}

function next1 () {
    document.getElementById("allgemein1").style.display = "none";
    document.getElementById("allgemein2").style.display = "flex";
    console.log ("next1")

    if (numberOfPlayers == 1) { onePlayer ()};
    if (numberOfPlayers == 2) { twoPlayers ()};
    if (numberOfPlayers == 3) { threePlayers ()};
    if (numberOfPlayers == 4) { fourPlayers ()};
}

function onePlayer () {
    document.getElementById("wrapper2").style.display = "none";
    document.getElementById("wrapper3").style.display = "none";
    document.getElementById("wrapper4").style.display = "none";

    document.getElementById("spielfeld-2").style.opacity = "0.5";
    document.getElementById("spielfeld-3").style.opacity = "0.5";
    document.getElementById("spielfeld-4").style.opacity = "0.5";

 }
function twoPlayers () {
    document.getElementById("wrapper3").style.display = "none";
    document.getElementById("wrapper4").style.display = "none";

    document.getElementById("spielfeld-3").style.opacity = "0.5";
    document.getElementById("spielfeld-4").style.opacity = "0.5";
}
function threePlayers () {
    document.getElementById("wrapper4").style.display = "none";

    document.getElementById("spielfeld-4").style.opacity = "0.5";
}
function fourPlayers () {console.log ("4player")}


// selection "player names"

let okButton1 = document.getElementById("ok-button1");
let okButton2 = document.getElementById("ok-button2");
let okButton3 = document.getElementById("ok-button3");
let okButton4 = document.getElementById("ok-button4");

okButton1.disabled = false;
okButton2.disabled = true;
okButton3.disabled = true;
okButton4.disabled = true;

let trashButton1 = document.getElementById("trash-button1");
let trashButton2 = document.getElementById("trash-button2");
let trashButton3 = document.getElementById("trash-button3");
let trashButton4 = document.getElementById("trash-button4");

trashButton1.disabled = false;
trashButton2.disabled = true;
trashButton3.disabled = true;
trashButton4.disabled = true;


let playerName1 = "";
let playerName2 = "";
let playerName3 = "";
let playerName4 = "";
let playerNameString = [];


function inputPlayerName1() {
    playerName1 = document.getElementById("inputNamePlayer1").value;
    playerNameString.push(playerName1);
    document.getElementById("namePlayer1").textContent="player 1: " + playerName1;
    document.getElementById("inputNamePlayer1").value="";
    if (numberOfPlayers == 1) {
        playerName2 = "computer";
        playerNameString.push("computer");
        nextButton2.disabled = false;
    }
    okButton1.disabled = true;
    okButton2.disabled = false;
    trashButton2.disabled = false;
}
function inputPlayerName2() {
    playerName2 = document.getElementById("inputNamePlayer2").value;
    playerNameString.push(playerName2);
    document.getElementById("namePlayer2").textContent = "player 2: "+ playerName2;
    document.getElementById("inputNamePlayer2").value="";
    if (numberOfPlayers == 2) {
        nextButton2.disabled = false;
    }
    okButton2.disabled = true;
    okButton3.disabled = false;
    trashButton3.disabled = false;
}
function inputPlayerName3() {
    playerName3 = document.getElementById("inputNamePlayer3").value;
    playerNameString.push(playerName3);
    document.getElementById("namePlayer3").textContent = "player 3: "+ playerName3;
    document.getElementById("inputNamePlayer3").value="";
    if (numberOfPlayers == 3) {
        nextButton2.disabled = false;
    }

    okButton3.disabled = true;
    okButton4.disabled = false;
    trashButton4.disabled = false;
}
function inputPlayerName4() {
    playerName4 = document.getElementById("inputNamePlayer4").value;
    playerNameString.push(playerName4);
    document.getElementById("namePlayer4").textContent = "player 4: "+ playerName4;
    document.getElementById("inputNamePlayer4").value="";
    okButton4.disabled = true;
    nextButton2.disabled = false;
}

function trashPlayerName1() {
    document.getElementById("namePlayer1").textContent = "player 1";
    document.getElementById("inputNamePlayer1").value ="";
    okButton1.disabled = false;
}
function trashPlayerName2() {
    document.getElementById("namePlayer2").textContent = "player 2";
    document.getElementById("inputNamePlayer2").value ="";
    okButton2.disabled = false;
}
function trashPlayerName3() {
    document.getElementById("namePlayer3").textContent = "player 3";
    document.getElementById("inputNamePlayer3").value ="";
    okButton3.disabled = false;
}
function trashPlayerName4() {
    document.getElementById("namePlayer4").textContent = "player 4";
    document.getElementById("inputNamePlayer4").value ="";
    okButton4.disabled = false;
}


// selection "number of rounds"

let buttonStart = document.getElementById("button-start");
buttonStart.disabled = true;

function next2 () {
    document.getElementById("allgemein2").style.display = "none";
    document.getElementById("allgemein3").style.display = "flex";
    console.log ("next2");
    console.log (numberOfPlayers);
}
function numberRounds () {
    numberOfRounds = document.getElementById("select-rounds").value;
    buttonStart.disabled = false;
    console.log("numberOfRounds: " + numberOfRounds);
}


// game start

//let startButton = document.getElementById("button-start");

let round = 0;
let results = [];
let zufallszahl1 = Math.floor(Math.random() * 6)+1;
let zufallszahl2 = Math.floor(Math.random() * 6)+1;
let zufallszahl3 = Math.floor(Math.random() * 6)+1;
let zufallszahl4 = Math.floor(Math.random() * 6)+1;

let scorePlayer1 = 0;
let scorePlayer2 = 0;
let scorePlayer3 = 0;
let scorePlayer4 = 0;

let würfelbildPlayer1 = document.getElementById("bild-player1");
let würfelbildPlayer2 = document.getElementById("bild-player2");
let würfelbildPlayer3 = document.getElementById("bild-player3");
let würfelbildPlayer4 = document.getElementById("bild-player4");

function start() {
    results = [];

    document.getElementById("winner1").textContent ="";
    document.getElementById("winner2").textContent ="";
    document.getElementById("winner3").textContent ="";
    document.getElementById("winner4").textContent ="";

    round++;

    document.getElementById("allgemein-round").style.display = "flex";
    document.getElementById("roundnumber").textContent = round;
    setTimeout (anzeigeRound, 1000);
    function anzeigeRound () {
        document.getElementById("allgemein-round").style.display = "none";
    }

    console.log("Runden gesamt: " + numberOfRounds);

    if (round > numberOfRounds ) {
        endOfGame ();
        return;
    }
   
    zufallszahl1 = Math.floor(Math.random() * 6)+1;
    zufallszahl2 = Math.floor(Math.random() * 6)+1;
    zufallszahl3 = Math.floor(Math.random() * 6)+1;
    zufallszahl4 = Math.floor(Math.random() * 6)+1;

    document.getElementById("allgemein3").style.display = "none";
    document.getElementById("allgemein4").style.display = "none";
    document.getElementById("allgemein5").style.display = "none";

    document.getElementById("spielfeld-1").style.borderColor = "red";
    document.getElementById("namePlayer1").textContent = "it is your turn, " + playerName1;
    document.getElementById("button-player1").textContent="roll the dice";
    rollDicePlayer1.disabled = false;
    würfelbildPlayer1.src = "StartbildWürfel.webp";
    würfelbildPlayer2.src = "StartbildWürfel.webp";
    würfelbildPlayer3.src = "StartbildWürfel.webp";
    würfelbildPlayer4.src = "StartbildWürfel.webp";
}


// rolling the dice

function würfelnPlayer1 () {
    results.push(zufallszahl1);
    console.log(results);
    console.log(results[0]);
    console.log("number of plasyers:" + numberOfPlayers);


    würfelbildPlayer1.src = "Würfelzahl" + zufallszahl1 + ".png"
    document.getElementById("spielfeld-1").style.borderColor = "white";
    document.getElementById("spielfeld-2").style.borderColor = "red";
    document.getElementById("spielfeld-2").style.opacity = "1";
    document.getElementById("namePlayer1").textContent="player 1: " + playerName1;
    document.getElementById("button-player1").textContent=" *WTF*";
    
    if (numberOfPlayers > 1) {
        document.getElementById("namePlayer2").textContent="it is your turn, " + playerName2;
        document.getElementById("button-player2").textContent="roll the dice";
        rollDicePlayer1.disabled = true;
        rollDicePlayer2.disabled = false;
    }
    else {
        document.getElementById("namePlayer2").textContent="it is your turn, Computer";
        document.getElementById("spielfeld-2").style.opacity = "1";
        document.getElementById("button-player2").textContent="roll the dice";
        rollDicePlayer1.disabled = true;
        function würfelnComputer () {
            results.push(zufallszahl2);
            console.log(results);
        }
        würfelnComputer();
        function anzeigeWürfelbildComputer () {
            würfelbildPlayer2.src = "Würfelzahl" + zufallszahl2 + ".png"
            document.getElementById("spielfeld-2").style.borderColor = "white";
            document.getElementById("namePlayer2").textContent="player 2: Computer";
            document.getElementById("button-player2").textContent=" *OMG*";
        }
        setTimeout (anzeigeWürfelbildComputer, 1000);
        evaluation1Player ();
    }
}

function würfelnPlayer2 () {
    results.push(zufallszahl2);
    console.log(results);
    würfelbildPlayer2.src = "Würfelzahl" + zufallszahl2 + ".png"
    document.getElementById("spielfeld-2").style.borderColor = "white";
    rollDicePlayer2.disabled = true;
    rollDicePlayer3.disabled = false;
    if (numberOfPlayers > 2) {
        document.getElementById("namePlayer3").textContent="it is your turn, " + playerName3;
        document.getElementById("button-player3").textContent="roll the dice";
        document.getElementById("spielfeld-2").style.borderColor = "white";
        document.getElementById("spielfeld-3").style.borderColor = "red";
        document.getElementById("spielfeld-3").style.opacity = "1";
        document.getElementById("namePlayer2").textContent="player 2: " + playerName2;
        document.getElementById("button-player2").textContent=" *OMG*";
    }
    else {evaluation2Players ()};
}

function würfelnPlayer3 () {
    results.push(zufallszahl3);
    console.log(results);
    würfelbildPlayer3.src = "Würfelzahl" + zufallszahl3 + ".png"
    document.getElementById("spielfeld-3").style.borderColor = "white";
    if (numberOfPlayers > 3) {
        document.getElementById("namePlayer4").textContent="it is your turn, " + playerName4;
        document.getElementById("button-player4").textContent="roll the dice";
        rollDicePlayer3.disabled = true;
        rollDicePlayer4.disabled = false;
        document.getElementById("spielfeld-3").style.borderColor = "white";
        document.getElementById("spielfeld-4").style.borderColor = "red";
        document.getElementById("spielfeld-4").style.opacity = "1";
        document.getElementById("namePlayer3").textContent="player 3: " + playerName3;
        document.getElementById("button-player3").textContent=" *Hey*";
    }
    else {evaluation3Players ()};
}

function würfelnPlayer4 () {
    results.push(zufallszahl4);
    console.log(results);
    würfelbildPlayer4.src = "Würfelzahl" + zufallszahl4 + ".png"
    document.getElementById("spielfeld-4").style.borderColor = "white";
    rollDicePlayer4.disabled = true;
    document.getElementById("namePlayer4").textContent="player 4: " + playerName4;
    document.getElementById("button-player3").textContent=" *HoHoHo*";
    evaluation4Players ();
}


// evaluation of results and player score
        
let player1score = 0;
let player2score = 0;
let player3score = 0;
let player4score = 0;


function evaluation1Player () {
    let highestNumber = Math.max(...results);
    let indexOfFirstHighestNumber = results.indexOf(highestNumber);
    let AnzahlHighestNumber = 0;
    for (let i = 0; i < results.length; i++) {
        if (results[i] === results [indexOfFirstHighestNumber]) {
            AnzahlHighestNumber++
        }
    }
    if (AnzahlHighestNumber > 1) {
        setTimeout (displayWinnerDraw, 1000);
        function displayWinnerDraw () {
        document.getElementById("allgemein4").style.display = "flex";
        document.getElementById("winner-message").textContent = "no winner in this round !";
        }
    }
    if (AnzahlHighestNumber === 1 && indexOfFirstHighestNumber === 0) {
        setTimeout (displayWinner1, 1000);
        function displayWinner1 () {
        document.getElementById("allgemein4").style.display = "flex";
        document.getElementById("winner-message").textContent = playerName1 + " has won !";
        player1score++;
        document.getElementById("scorePlayer1").textContent = "score: " + player1score;
        }
    }
    if (AnzahlHighestNumber === 1 && indexOfFirstHighestNumber === 1) {
        setTimeout (displayWinner2, 1000);
        function displayWinner2 () {
        document.getElementById("allgemein4").style.display = "flex";
        document.getElementById("winner-message").textContent = "Computer has won !";
        player2score++;
        document.getElementById("scorePlayer2").textContent = "score: " + player2score;
        }
    }
}

function evaluation2Players () {
    let highestNumber = Math.max(...results);
    let indexOfFirstHighestNumber = results.indexOf(highestNumber);
    let AnzahlHighestNumber = 0;
    for (let i = 0; i < results.length; i++) {
        if (results[i] === results [indexOfFirstHighestNumber]) {
            AnzahlHighestNumber++
        }
    }
    if (AnzahlHighestNumber > 1) {
        setTimeout (displayWinnerDraw, 1000);
        function displayWinnerDraw () {
        document.getElementById("allgemein4").style.display = "flex";
        document.getElementById("winner-message").textContent = "no winner in this round !";
        }
    }
    if (AnzahlHighestNumber === 1 && indexOfFirstHighestNumber === 0) {
        setTimeout (displayWinner1, 1000);
        function displayWinner1 () {
        document.getElementById("allgemein4").style.display = "flex";
        document.getElementById("winner-message").textContent = playerName1 + " has won !";
        player1score++;
        document.getElementById("scorePlayer1").textContent = "score: " + player1score;
        }
    }
    if (AnzahlHighestNumber === 1 && indexOfFirstHighestNumber === 1) {
        setTimeout (displayWinner2, 1000);
        function displayWinner2 () {
        document.getElementById("allgemein4").style.display = "flex";
        document.getElementById("winner-message").textContent = playerName2 + " has won !";
        player2score++;
        document.getElementById("scorePlayer2").textContent = "score: " + player2score;
        }
    }
}

function evaluation3Players () {
    let highestNumber = Math.max(...results);
    let indexOfFirstHighestNumber = results.indexOf(highestNumber);
    let AnzahlHighestNumber = 0;
    for (let i = 0; i < results.length; i++) {
        if (results[i] === results [indexOfFirstHighestNumber]) {
            AnzahlHighestNumber++
        }
    }
    if (AnzahlHighestNumber > 1) {
        setTimeout (displayWinnerDraw, 1000);
        function displayWinnerDraw () {
        document.getElementById("allgemein4").style.display = "flex";
        document.getElementById("winner-message").textContent = "no winner in this round !";
        }
    }
    if (AnzahlHighestNumber === 1 && indexOfFirstHighestNumber === 0) {
        setTimeout (displayWinner1, 1000);
        function displayWinner1 () {
        document.getElementById("allgemein4").style.display = "flex";
        document.getElementById("winner-message").textContent = playerName1 + " has won !";
        player1score++;
        document.getElementById("scorePlayer1").textContent = "score: " + player1score;
        }
    }
    if (AnzahlHighestNumber === 1 && indexOfFirstHighestNumber === 1) {
        setTimeout (displayWinner2, 1000);
        function displayWinner2 () {
        document.getElementById("allgemein4").style.display = "flex";
        document.getElementById("winner-message").textContent = playerName2 + " has won !";
        player2score++;
        document.getElementById("scorePlayer2").textContent = "score: " + player2score;
        }
    }
    if (AnzahlHighestNumber === 1 && indexOfFirstHighestNumber === 2) {
        setTimeout (displayWinner3, 1000);
        function displayWinner3 () {
        document.getElementById("allgemein4").style.display = "flex";
        document.getElementById("winner-message").textContent = playerName3 + " has won !";
        player3score++;
        document.getElementById("scorePlayer3").textContent = "score: " + player3score;
        }
    }
}

function evaluation4Players () {
    let highestNumber = Math.max(...results);
    let indexOfFirstHighestNumber = results.indexOf(highestNumber);
    let AnzahlHighestNumber = 0;
    for (let i = 0; i < results.length; i++) {
        if (results[i] === results [indexOfFirstHighestNumber]) {
            AnzahlHighestNumber++
        }
    }
    if (AnzahlHighestNumber > 1) {
        setTimeout (displayWinnerDraw, 1000);
        function displayWinnerDraw () {
        document.getElementById("allgemein4").style.display = "flex";
        document.getElementById("winner-message").textContent = "no winner in this round !";
        }
    }
    if (AnzahlHighestNumber === 1 && indexOfFirstHighestNumber === 0) {
        setTimeout (displayWinner1, 1000);
        function displayWinner1 () {
        document.getElementById("allgemein4").style.display = "flex";
        document.getElementById("winner-message").textContent = playerName1 + " has won !";
        player1score++;
        document.getElementById("scorePlayer1").textContent = "score: " + player1score;
        }
    }
    if (AnzahlHighestNumber === 1 && indexOfFirstHighestNumber === 1) {
        setTimeout (displayWinner2, 1000);
        function displayWinner2 () {
        document.getElementById("allgemein4").style.display = "flex";
        document.getElementById("winner-message").textContent = playerName2 + " has won !";
        player2score++;
        document.getElementById("scorePlayer2").textContent = "score: " + player2score;
        }
    }
    if (AnzahlHighestNumber === 1 && indexOfFirstHighestNumber === 2) {
        setTimeout (displayWinner3, 1000);
        function displayWinner3 () {
        document.getElementById("allgemein4").style.display = "flex";
        document.getElementById("winner-message").textContent = playerName3 + " has won !";
        player3score++;
        document.getElementById("scorePlayer3").textContent = "score: " + player3score;
        }
    }
    if (AnzahlHighestNumber === 1 && indexOfFirstHighestNumber === 3) {
        setTimeout (displayWinner4, 1000);
        function displayWinner4 () {
        document.getElementById("allgemein4").style.display = "flex";
        document.getElementById("winner-message").textContent = playerName4 + " has won !";
        player4score++;
        document.getElementById("scorePlayer4").textContent = "score: " + player4score;
        }
    }
}

// end of game

function endOfGame () {
    console.log ("WInniWinni");

    // no winner at all

    if (player1score === 0 && player2score === 0 && player3score === 0 & player4score === 0) {
        document.getElementById("winner-message5").textContent = ("we have no winner !");
        document.getElementById("winner1").textContent = ("");
        document.getElementById("winner2").textContent = ("");
        document.getElementById("winner3").textContent = ("");
        document.getElementById("winner4").textContent = ("");

        document.getElementById("allgemein5").style.display = "flex";
    }
    else { endOfGameWithWinners ()
    }
}

function endOfGameWithWinners () {
    document.getElementById("winner1").textContent = ("");
    document.getElementById("winner2").textContent = ("");
    document.getElementById("winner3").textContent = ("");
    document.getElementById("winner4").textContent = ("");

    let scoreString = [player1score, player2score, player3score, player4score];
    let highestScore = Math.max(...scoreString);
    console.log ("highest score: " + highestScore);
    let indexOfFirstHighestScore = scoreString.indexOf(highestScore);
    console.log ("indexOfFirstHighestScore: " + indexOfFirstHighestScore);
    if (numberOfPlayers == 1) {
        numberOfPlayers++
    }
    console.log ("number of players adjusted:" + numberOfPlayers);
    console.log ("players are:" + playerNameString);
    
    /*
    // last player is winner

    if (indexOfFirstHighestScore == 3 && numberOfPlayers == 4) {
        //document.getElementById("winner-message5").textContent = ("and the winner is:");
        document.getElementById("winner1").textContent = (playerNameString[3]);
        document.getElementById("allgemein5").style.display = "flex";
        }
    if (indexOfFirstHighestScore == 2 && numberOfPlayers == 3) {
        //document.getElementById("winner-message5").textContent = ("and the winner is:");
        document.getElementById("winner1").textContent = (playerNameString[2]);
        document.getElementById("allgemein5").style.display = "flex";
    }
    if (indexOfFirstHighestScore == 1 && numberOfPlayers == 2) {
        //document.getElementById("winner-message5").textContent = ("and the winner is:");
        document.getElementById("winner1").textContent = (playerNameString[1]);
        document.getElementById("allgemein5").style.display = "flex";
    }
    if (indexOfFirstHighestScore == 1 && numberOfPlayers == 1) {
        //document.getElementById("winner-message5").textContent = ("and the winner is:");
        document.getElementById("winner1").textContent = ("the computer");
        document.getElementById("allgemein5").style.display = "flex";
    }
*/
    // other winners
    let winnerString = [];

    for (i = indexOfFirstHighestScore; i < scoreString.length; i++) {
        if (scoreString[i] == highestScore){
            winnerString.push(playerNameString[i])
        }
    }
    console.log("winnerString:" + winnerString);
    console.log("winnerStringLength:" + winnerString.length);

    if (winnerString.length > 1) {
        document.getElementById("winner-message5").textContent = ("oha, it´s more than 1 winner:");
    }
    //document.getElementById("winner1").textContent = (playerNameString[indexOfFirstHighestScore]);
    document.getElementById("winner2").textContent = (winnerString[0]);
    document.getElementById("winner3").textContent = (winnerString[1]);
    document.getElementById("winner4").textContent = (winnerString[2]);
    document.getElementById("allgemein5").style.display = "flex";

    numberOfPlayers = numberOfPlayersFirstChoice;
    console.log("numberOfPlayers:" + numberOfPlayers);
    console.log("numberOfPlayersFirstChoice:" + numberOfPlayersFirstChoice);

}
    
function newGame () {
    document.getElementById("new-game").style.display = "flex";
 }

function newGameSamePlayers () {

    document.getElementById("winner-message5").textContent = ("");
    document.getElementById("winner1").textContent = ("");
    document.getElementById("winner2").textContent = ("");
    document.getElementById("winner3").textContent = ("");
    document.getElementById("winner4").textContent = ("");

    player1score = 0;
    player2score = 0;
    player3score = 0;
    player4score = 0;

    numberOfRounds = 0;
    buttonStart.disabled = true;


    document.getElementById("namePlayer1").textContent="player 1: " + playerName1;
    document.getElementById("namePlayer2").textContent="player 2: " + playerName2;
    document.getElementById("namePlayer3").textContent="player 3: " + playerName3;
    document.getElementById("namePlayer4").textContent="player 4: " + playerName4;

    würfelbildPlayer1.src = "StartbildWürfel.webp";
    würfelbildPlayer2.src = "StartbildWürfel.webp";
    würfelbildPlayer3.src = "StartbildWürfel.webp";
    würfelbildPlayer4.src = "StartbildWürfel.webp";

    document.getElementById("scorePlayer1").textContent = "score: " + player4score;
    document.getElementById("scorePlayer2").textContent = "score: " + player4score;
    document.getElementById("scorePlayer3").textContent = "score: " + player4score;
    document.getElementById("scorePlayer4").textContent = "score: " + player4score;

    document.getElementById("winner1").textContent = ("");
    document.getElementById("winner2").textContent = ("");
    document.getElementById("winner3").textContent = ("");
    document.getElementById("winner4").textContent = ("");


    document.getElementById("spielfeld-1").style.opacity = "1";

    okButton1.disabled = false;
    trashButton1.disabled = false;
    round = 0;

    document.getElementById("wrapper1").style.display = "flex";
    document.getElementById("wrapper2").style.display = "flex";
    document.getElementById("wrapper3").style.display = "flex";
    document.getElementById("wrapper4").style.display = "flex";

    okButton1.disabled = false;
    okButton2.disabled = false;
    okButton3.disabled = false;
    okButton4.disabled = false;
    trashButton1.disabled = false;
    trashButton2.disabled = false;
    trashButton3.disabled = false;
    trashButton4.disabled = false;

    document.getElementById("new-game").style.display = "none";
    document.getElementById("allgemein5").style.display = "none";
    document.getElementById("allgemein4").style.display = "none";
    document.getElementById("allgemein2").style.display = "none";
    document.getElementById("allgemein1").style.display = "none";

    document.getElementById("allgemein3").style.display = "flex";
}

function newGameOtherPlayers () {
    
    document.getElementById("winner-message5").textContent = ("");
    document.getElementById("winner1").textContent = ("");
    document.getElementById("winner2").textContent = ("");
    document.getElementById("winner3").textContent = ("");
    document.getElementById("winner4").textContent = ("");

    playerNameString = [];
    player1score = 0;
    player2score = 0;
    player3score = 0;
    player4score = 0;

    numberOfPlayers = 0;
    numberOfRounds = 0;
    buttonStart.disabled = true;
    playerName1 = "";
    playerName2 = "";
    playerName3 = "";
    playerName4 = "";

    document.getElementById("namePlayer1").textContent="player 1: " + playerName1;
    document.getElementById("namePlayer2").textContent="player 2: " + playerName1;
    document.getElementById("namePlayer3").textContent="player 3: " + playerName1;
    document.getElementById("namePlayer4").textContent="player 4: " + playerName1;

    würfelbildPlayer1.src = "StartbildWürfel.webp";
    würfelbildPlayer2.src = "StartbildWürfel.webp";
    würfelbildPlayer3.src = "StartbildWürfel.webp";
    würfelbildPlayer4.src = "StartbildWürfel.webp";

    document.getElementById("scorePlayer1").textContent = "score: " + player4score;
    document.getElementById("scorePlayer2").textContent = "score: " + player4score;
    document.getElementById("scorePlayer3").textContent = "score: " + player4score;
    document.getElementById("scorePlayer4").textContent = "score: " + player4score;

    document.getElementById("winner1").textContent = ("");
    document.getElementById("winner2").textContent = ("");
    document.getElementById("winner3").textContent = ("");
    document.getElementById("winner4").textContent = ("");

    document.getElementById("spielfeld-1").style.opacity = "1";

    okButton1.disabled = false;
    trashButton1.disabled = false;
    round = 0;

    document.getElementById("wrapper1").style.display = "flex";
    document.getElementById("wrapper2").style.display = "flex";
    document.getElementById("wrapper3").style.display = "flex";
    document.getElementById("wrapper4").style.display = "flex";

    okButton1.disabled = false;
    okButton2.disabled = false;
    okButton3.disabled = false;
    okButton4.disabled = false;
    trashButton1.disabled = false;
    trashButton2.disabled = false;
    trashButton3.disabled = false;
    trashButton4.disabled = false;

    document.getElementById("new-game").style.display = "none";
    document.getElementById("allgemein5").style.display = "none";
    document.getElementById("allgemein4").style.display = "none";
    document.getElementById("allgemein3").style.display = "none";
    document.getElementById("allgemein2").style.display = "none";

    document.getElementById("allgemein1").style.display = "flex";
}

