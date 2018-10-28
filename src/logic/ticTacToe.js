var gameField = [[]];
var activePlayer;
//Variable to keep track if there is a winner in the match
var win;
//To start the game
resetCanvas();

//Initializing the canvas
function resetCanvas() {
    gameField = [[" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]];
    //No winner in the beginning
    win = false;
    //Setting the starting player as X
    activePlayer = "X";
}

//Clicking on a field
function boxClicked(x, y) {
    if (gameField[x][y] == " "){
        gameField[x][y] = activePlayer;
        return true;
    }
    else {
        return false;
    }
}

function getGamefield () {
    return gameField;
}

function getActivePlayer() {
    return activePlayer;
}

function changePlayers() {
    if (activePlayer == "X") {
        activePlayer = "O";
    }
    else {
        activePlayer = "X";
    }
}

//Checking if the last player made a win
function checkForWin(x, y){
    //Vertical
    checkVertical(x);
    if(win){
        return true;
    }
    return false;
}

//Checking for vertical win
function checkVertical(x){
    if(gameField[x][0] == gameField[x][1] && gameField[x][0] ==gameField[x][2]){
        win = true;
    }
}

function getWin(){
    return win;
}
module.exports.resetCanvas = resetCanvas;
module.exports.getGamefield = getGamefield;
module.exports.gameField = gameField;
module.exports.activePlayer = activePlayer;
module.exports.boxClicked = boxClicked;
module.exports.changePlayers = changePlayers;
module.exports.getActivePlayer = getActivePlayer;
module.exports.checkForWin = checkForWin;
module.exports.checkVertical = checkVertical;
module.exports.win = win;
module.exports.getWin = getWin;
