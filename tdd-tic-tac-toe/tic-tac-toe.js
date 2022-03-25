class TicTacToeGame {
  constructor() {
    this.players = [];
    this.moves = [];
    this.reset();
  }
  gameBoardStatus() {
    return `The board is empty`;
  }
  addPlayer(player, symbol) {
    if (this.players.length < 2) {
      this.players.push({ player, symbol });
    } else {
      return "Maximum number of players exceeded.";
    }
  }
  getPlayers() {
    return this.players.map((player) => player.player);
  }
  getPlayerSymbols() {
    return this.players;
  }
  getEmptySpaces() {
    return this.spaces.reduce(
      // multiplying by a boolean is a "branchless" way to return the right value here because 1 * false === 0
      (count, space) => count + 1 * (space === "empty"),
      0
    );
  }
  getAvailableSpaces() {
    return this.spaces.reduce((array, spaceVal, index) => {
      if (spaceVal === "empty") array.push(index);
      return array;
    }, []);
  }
  updateBoard(player, space) {
    let movingPlayer = this.players.find(
      (playerObj) => playerObj.player === player
    );
    this.spaces[space] = movingPlayer.symbol;
    this.moves.push({ player, space });
  }
  getPlayerMoves(player) {
    if (!player) {
      return this.moves.length ? this.moves : `There have been no moves.`;
    } else {
      let moves = this.moves
        .filter((move) => move.player === player)
        .map((move) => move.space);
      return moves;
    }
  }
  isValidMove(space) {
    return this.getAvailableSpaces().includes(space);
  }
  reset() {
    this.spaces = Array(9).fill(`empty`);
    this.moves = [];
    return [];
  }
}

module.exports = TicTacToeGame;
