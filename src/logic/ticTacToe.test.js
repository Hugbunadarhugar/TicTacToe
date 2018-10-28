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

it ("should change active player from X to O", () => {
  Game.activePlayer = "X";
  Game.changePlayers();
  expect(Game.getActivePlayer()).toBe("O");
});

it ("should change active player from O to X", () => {
  Game.activePlayer = "O";
  Game.changePlayers();
  expect(Game.getActivePlayer()).toBe("X");
});



