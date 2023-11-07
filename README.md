# Tic-Tac-Toe

# Over view:

1. Two players (X,Y)
2. A Board (3x3)
3. 'X' plays first by default 
4. Validates the player's turn
5. Validates the move  
6. Game status :
            1. X-wins
            2. Y-wins
            3. Draw
            4. Ongoing
7. Displays the board and status on each turn
8. Warning message on wrong move or invalid player.
9. tic_tac_toe.js Contains the game engine (logic).

# How to play:

1. Run tic_tac_toe_play.js file.
2. Enter players' names. 'x' has the first turn by default, first player name is assigned with x.
3. Start entering your moves, make sure you enter X/O and the position on the grid.
   eg: X,1  O,6  X,4    

# Design and domain requirements. 

1. We start the game.
2. There are 2 players X & O. [rule]
3. We store their names.
4. X plays first. [rule]
5. They mark their spot:

  x _ _
  _ _ _ 
  _ _ _

  6. O plays:

  x _ _
  _ O _ 
  _ _ _

  7. Game continues, untill one of these things happen:
     1. X Wins.
     2. O Wins.
     3. More moves are left.
     4. Draw.

  ## Emerging Requirements

  1. Store the name of the players.
  2. Current player, Next player.
  3. Store the game board.
  4. game status.
  5. Game orchestration. 

    