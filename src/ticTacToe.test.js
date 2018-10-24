const greeting = require('./ticTacToe');
test("returns greeting with custom name", () => {  
    expect(greeting("Bei")).toBe("Hello, Bei!");
});