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
    //Horizontal
    checkHorizontal(y);
    //Diagonal
    checkDiagonal(x ,y);
    if(win){
        fillArray();
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

//Checking for horizontal win
function checkHorizontal(y){
    if(gameField[0][y] == gameField[1][y] && gameField[0][y] == gameField[2][y]){
        win = true;
    }
}

//Checking for diagonal win
function checkDiagonal(x, y){
    //If x == y then there might be a diagonal win to the right
    if(x == y && gameField[0][0] == gameField[1][1] && gameField[0][0] == gameField[2][2]){
        win = true;
    }
    //If x + y = 2 then there might be a diagonal win to the left
    else if(x + y == 2 && gameField[2][0] == gameField[1][1] && gameField[2][0] == gameField[0][2]){
        win = true;
    }

}

//Checking for tie
function checkTie(){
    for(var i = 0; i < 3; i++){
        for(var j = 0; j < 3; j++){
            if(gameField[i][j] == " "){
                return false;
            }
        }
    }
    return true;
}

function getWin(){
    return win;
}

//Fills the gameField array
function fillArray(){
    for(var i = 0; i < 3; i++){
        for(var j = 0; j < 3; j++){
            gameField[i][j] = activePlayer;
        }
    }
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
module.exports.checkHorizontal = checkHorizontal;
module.exports.checkDiagonal = checkDiagonal;
module.exports.checkTie = checkTie;
module.exports.fillArray = fillArray;