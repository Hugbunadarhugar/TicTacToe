var gameField = [[]];
//var $box = $("td");

//To start the game
resetCanvas();

//Initializing the canvas
function resetCanvas() {
    gameField = [[" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]];
    //To empty the td's
   /* for (i = 0; i < $box.length; i++) {
        $($box[i]).html("");
    }*/
}

function getGamefield () {
    return gameField;
}

module.exports.resetCanvas = resetCanvas;
module.exports.getGamefield = getGamefield;
module.exports.gameField = gameField;
