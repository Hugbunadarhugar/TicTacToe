const _ = require("lodash");
const ticTacToe = require('../logic/ticTacToe');
const css = require("./styles.css");
var player = "X";

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
    else{
        alert("Please click on an empty field.");
    }
});