const ticTacToe = (xName, oName) => {
    const players = {
      X: xName,
      O: oName,
    };
  
    //Visual representation of data structure
    const board = [
      "ongoing", // ongoing, win-X, win-O, draw
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ];
  
    let currentPlayer = "X"; // X plays first -- default value is X
  
    //Concept: Lookup Table
    const nextPlayer = {
      X: "O",
      O: "X",
    };
  
    const isValidMove = (move) => {
      return 1 <= move && move <= 9 && board[move] === "";
    };
  
    const computeStatus = () => {
      //ongoing, win-X, win-O, draw
      let result = "ongoing";
  
      const winningCombos = [
        // rows
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        // coumns
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        // diagonals
        [1, 5, 9],
        [3, 5, 7],
      ];
  
      // check for a win-X
      // check for a win-O
      for (i = 0; i < winningCombos.length; i++) {
        let [i1, i2, i3] = winningCombos[i];
        if (
          board[i1] === board[i2] &&
          board[i2] === board[i3] &&
          board[i3] === currentPlayer
        ) {
          return `${players[currentPlayer]}-wins: (${currentPlayer})`;
        }
      }
  
      // check for draw
      if (
        board.filter((item) => {
          return item === "";
        }).length === 0
      ) {
        return "draw";
      }
      // continue the game
      return result;
    };
  
    return (player, move) => {
      // Validate right player: return <error> if not
      if (player !== currentPlayer) {
        return [false, `Not your turn, its ${currentPlayer}'s turn.`];
      }
      // Validate right move: return <error> if not
      if (!isValidMove(move)) {
        return [false, "Invalid move, try again!!"];
      }
  
      board[move] = currentPlayer;
      board[0] = computeStatus();
      currentPlayer = nextPlayer[currentPlayer];
      // Progress the game:
      //   1. Update the board
      //   2. Update the game status
      //   3. Change the current player
      return [true, board];
    };
  };
  
  module.exports = { ticTacToe };