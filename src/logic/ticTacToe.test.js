const Game = require('./ticTacToe');

it("should begin a new game with an empty gameboard", () => {
  
  function testResetCanvas(){
    Game.resetCanvas();
    return Game.getGamefield();
  }  
    expect(testResetCanvas()).toEqual([[" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]]);
});