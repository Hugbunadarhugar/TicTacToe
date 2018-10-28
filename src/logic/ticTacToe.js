var gameField = [[]];
var activePlayer;

//To start the game
resetCanvas();

//Initializing the canvas
function resetCanvas() {
    gameField = [[" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]];

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


module.exports.resetCanvas = resetCanvas;
module.exports.getGamefield = getGamefield;
module.exports.gameField = gameField;
module.exports.activePlayer = activePlayer;
module.exports.boxClicked = boxClicked;
module.exports.changePlayers = changePlayers;
module.exports.getActivePlayer = getActivePlayer;
