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


it ("should not change the gameboard when the same field is clicked twice", () => {
  Game.resetCanvas();
  Game.boxClicked(0,0); 
  Game.boxClicked(0,0);
  expect(Game.getGamefield()).toEqual([["X", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "]])
});

it("should return a win on a vertical row", () => {
  Game.resetCanvas();
  Game.boxClicked(0,0); 
  Game.boxClicked(0,1);
  Game.boxClicked(0,2);
  Game.checkVertical(0);
  expect(Game.getWin()).toBe(true);
});

it("should return a win on a horizontal row", () => {
  Game.resetCanvas();
  Game.boxClicked(0,0); 
  Game.boxClicked(1,0);
  Game.boxClicked(2,0);
  Game.checkHorizontal(0);
  expect(Game.getWin()).toBe(true);
});


it("should return a win on a right side diagonal row", () => {
  Game.resetCanvas();
  Game.boxClicked(0,0); 
  Game.boxClicked(1,1);
  Game.boxClicked(2,2);
  Game.checkDiagonal(2,2);
  expect(Game.getWin()).toBe(true);
});

it("should return a win on a left side diagonal row", () => {
  Game.resetCanvas();
  Game.boxClicked(2,0); 
  Game.boxClicked(1,1);
  Game.boxClicked(0,2);
  Game.checkDiagonal(0,2);
  expect(Game.getWin()).toBe(true);
});
