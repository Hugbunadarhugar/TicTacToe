const _ = require("lodash");
const ticTacToe = require('../logic/ticTacToe');
const css = require("./styles.css");
var player = "X";
//For whose turn it is
var turn = document.getElementById("player");

var $box = $("td");

$box.on("click", function (event) {
    //Getting the cordinates
    var x = Math.floor((event.clientX - gameBoard.getBoundingClientRect().left) / 100);
    var y = Math.floor((event.clientY - gameBoard.getBoundingClientRect().top) / 100);

    if(ticTacToe.boxClicked(x,y)){
        player = ticTacToe.getActivePlayer();
        $(this).html(player);
        player = ticTacToe.changePlayers();
    }
    else if(ticTacToe.gameField[x][y] != " " && $(board).hasClass("Game over")){
        alert("The game is over.");
    }
    else{
        alert("Please click on an empty field.");
    }
    //Checking if the last play was a winning play
    if(ticTacToe.checkForWin(x, y)) {
        turn.innerText = "Game over!";
        $(board).addClass("Game over");
    }
    else if(ticTacToe.checkTie()){
        turn.innerText = "It's a tie!";
        $(board).addClass("Game over");
    }
    else{
        //Telling whose turn it is
        turn.innerText =  ticTacToe.getActivePlayer() + ", It's your turn!";
    }
});