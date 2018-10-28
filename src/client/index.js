const _ = require("lodash");
const ticTacToe = require('../logic/ticTacToe');
const css = require("./styles.css");
var player = "X";
//For whose turn it is
var turn = document.getElementById("player");
//Scoreboard
var xScoreText = document.getElementById("xScore");
var oScoreText = document.getElementById("oScore");

 //Telling whose turn it is
 turn.innerText =  ticTacToe.getActivePlayer() + ", It's your turn!";

 var $box = $("td");

//start game button
var reset = document.getElementById("reset");
reset.addEventListener("click", resetButton);

function resetButton() {
     ticTacToe.resetCanvas();
    //To empty the td's
    for (i = 0; i < $box.length; i++) {
        $($box[i]).html("");
    }
    $(board).removeClass("Game over");
}

$box.on("click", function (event) {
    //Getting the cordinates
    var x = Math.floor((event.clientX - gameBoard.getBoundingClientRect().left) / 100);
    var y = Math.floor((event.clientY - gameBoard.getBoundingClientRect().top) / 100);

    if(ticTacToe.boxClicked(x,y) && !$(board).hasClass("Game over")){
        player = ticTacToe.getActivePlayer();
        $(this).html(player);
        if(ticTacToe.checkForWin(x, y) && !$(board).hasClass("Game over")) {
            ticTacToe.raiseScore();
            turn.innerText = "Game over!";
            $(board).addClass("Game over");
            scoreText();
        }
        else if(ticTacToe.checkTie() && !$(board).hasClass("Game over")){
            turn.innerText = "It's a tie!";
            $(board).addClass("Game over");
        }
        else { 
            player = ticTacToe.changePlayers();
            //Telling whose turn it is
            turn.innerText =  ticTacToe.getActivePlayer() + ", It's your turn!";
        }
    }
    else if($(board).hasClass("Game over")){
        alert("The game is over.");
    }
    else{
        alert("Please click on an empty field.");
    }
});

function scoreText(){
    if(ticTacToe.getXScore() == 1){
        xScoreText.innerText = "X has " + ticTacToe.getXScore() + " point!";
    }
    else {
        xScoreText.innerText = "X has " + ticTacToe.getXScore() + " points!";
    }
    
    if(ticTacToe.getOScore() == 1){
        oScoreText.innerText = "O has " + ticTacToe.getOScore() + " point!";
    }
    else {
        oScore.innerText = "O has " + ticTacToe.getOScore() + " points!";
    }
}