const { ticTacToe } = require("./tic-tac-toe");
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let play; 

// This is to print 3x3 grid for the board
const print = (i, board) => {
  if (i <= 9) {
    if (i === 4 || i === 7) {
      console.log("");
    }
    board[i] ? process.stdout.write(board[i].concat("  ")) : process.stdout.write("_  ");
    print(i + 1, board);
  }
};

// This is to print current status and board. 
const printBoard = (board) => {
  console.log("");
  print(1, board);
  console.log("");
  console.log("");
  console.log(`Status: ${board[0]}`);
  console.log("");
};

// This function proceeds the game on the basis of status.
const start = () => {

  rl.question("Enter your move:",(input)=>{
    
  let [ player, move ] = input.split(",");

  [result, boardOrMessage] = play( player.toUpperCase().trim() , move.trim() );

  if (result) {
    printBoard(boardOrMessage);
  } else {
    console.log(boardOrMessage);
  }
  if(boardOrMessage[0] === "ongoing" || typeof(boardOrMessage)==='string'){
    start();
  } else {
    return"";
  }
 
}); 
  
}

//  This function initiates the game and prompts for player names
const initiate = () => {
  rl.question("Enter names of the players (player-1, player-2):" , ( input ) => {

    let [player1, player2] = input.split(",");
  
    play = ticTacToe(player1.trim(), player2.trim()); 
  
    start();

  });
  
}

initiate();



 