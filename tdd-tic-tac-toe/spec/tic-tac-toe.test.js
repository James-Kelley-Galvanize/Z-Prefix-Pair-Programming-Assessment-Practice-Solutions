const TicTacToeGame = require("../tic-tac-toe");

/*USE THIS: https://github.com/murphyl337/TicTacToe/blob/master/js/specs/tttSpec.js*/

describe("Tic Tac Toe Game", () => {
  it("should initialize with a blank gameboard", () => {
    let game = new TicTacToeGame();

    expect(game.gameBoardStatus()).toEqual("The board is empty");
  });

  it("should allow users to add two players", () => {
    let game = new TicTacToeGame();

    game.addPlayer("Player 1");
    game.addPlayer("Player 2");

    expect(game.getPlayers()).toEqual(["Player 1", "Player 2"]);
  });

  it("should not allow you to add more than 2 players", () => {
    let game = new TicTacToeGame();

    game.addPlayer("Player 1");
    game.addPlayer("Player 2");

    expect(game.getPlayers()).toEqual(["Player 1", "Player 2"]);
    expect(game.addPlayer("Player 3")).toEqual(
      "Maximum number of players exceeded."
    );
  });

  it("should assign each player a symbol: X or O", () => {
    let game = new TicTacToeGame();

    game.addPlayer("Player 1", "X");
    game.addPlayer("Player 2", "O");
    expect(game.getPlayerSymbols()).toEqual([
      { player: "Player 1", symbol: "X" },
      { player: "Player 2", symbol: "O" },
    ]);
  });

  it("should initialize with 9 spaces", () => {
    let game = new TicTacToeGame();

    expect(game.getEmptySpaces()).toBe(9);
  });

  it("should change the mark on a space when updated", function () {
    let game = new TicTacToeGame();
    game.addPlayer("Player 1", "X");
    game.addPlayer("Player 2", "O");

    game.updateBoard("Player 1", 0);
    expect(game.spaces[0]).toBe("X");

    game.updateBoard("Player 2", 5);
    expect(game.spaces[5]).toBe("O");
  });

  it("should return all spaces that haven't been taken when getAvailableSpaces is called", () => {
    let game = new TicTacToeGame();
    expect(game.getAvailableSpaces().length).toBe(9);

    game.addPlayer("Player 1", "X");
    game.addPlayer("Player 2", "O");

    game.updateBoard("Player 1", 5);
    game.updateBoard("Player 2", 2);
    game.updateBoard("Player 1", 0);
    game.updateBoard("Player 2", 3);
    expect(game.getAvailableSpaces()).toEqual([1, 4, 6, 7, 8]);
  });

  it("should return all of a player`s moves when getPlayerMoves is called", () => {
    let game = new TicTacToeGame();
    expect(game.getPlayerMoves()).toEqual("There have been no moves.");

    game.addPlayer("Player 1", "X");
    game.addPlayer("Player 2", "O");

    game.updateBoard("Player 1", 5);
    game.updateBoard("Player 2", 2);
    game.updateBoard("Player 1", 0);
    game.updateBoard("Player 2", 3);
    expect(game.getPlayerMoves("Player 1")).toEqual([5, 0]);
    expect(game.getPlayerMoves("Player 2")).toEqual([2, 3]);
  });

  it("should return true for available space, false if taken for isValidMove", () => {
    let game = new TicTacToeGame();

    game.addPlayer("Player 1", "X");
    game.addPlayer("Player 2", "O");

    game.updateBoard("Player 1", 5);
    game.updateBoard("Player 2", 2);
    game.updateBoard("Player 1", 0);
    game.updateBoard("Player 2", 3);

    expect(game.isValidMove(5)).toEqual(false);
    expect(game.isValidMove(8)).toEqual(true);
  });

  it("should reset the game when the button is clicked", () => {
    let game = new TicTacToeGame();

    game.addPlayer("Player 1", "X");
    game.addPlayer("Player 2", "O");

    game.updateBoard("Player 1", 0);
    game.updateBoard("Player 2", 1);
    game.updateBoard("Player 1", 2);
    game.updateBoard("Player 2", 3);
    game.updateBoard("Player 1", 4);
    game.updateBoard("Player 2", 5);
    game.updateBoard("Player 1", 6);
    game.updateBoard("Player 2", 7);
    game.updateBoard("Player 1", 8);

    expect(game.reset()).toEqual([]);
    expect(game.getAvailableSpaces()).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  });
});
