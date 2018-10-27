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



it("should return X as the first element", () => {
  Game.resetCanvas();
  Game.boxClicked(0,0); 
  expect(Game.getGamefield()).toEqual([["X", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "]])
});



