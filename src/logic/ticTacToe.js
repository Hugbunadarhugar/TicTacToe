var gameField = [[]];
var activePlayer;
//var $box = $("td");

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

function boxClicked(x, y) {
    if (gameField[x][y] == " ") 
        gameField[x][y] = activePlayer;
}

function getGamefield () {
    return gameField;
}

module.exports.resetCanvas = resetCanvas;
module.exports.getGamefield = getGamefield;
module.exports.gameField = gameField;
module.exports.activePlayer = activePlayer;
module.exports.boxClicked = boxClicked;
