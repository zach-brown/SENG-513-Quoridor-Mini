/* Zach Brown 
UCID: 30070355
Date: October 23 2023
SENG513 A2

Title: Quoridor Mini
Platform: Desktop
Genre: Strategy
Objective: First player to reach the other side of the board
Rules: 
This game is a twist on the classic board game quoridor. In quoridor mini, both players start on opposite
sides of a 5x5 board. They have to try and be the first player to reach their opponents side of the board.
Each player is given 8 walls and can use these walls by placing them down anywhere on the board as long as
they are not haning over the edge of the board. Players are not allowed to pass through these walls, and must
instead go around them. On a players turn they can either move on to a square that is orthogonal to them, place one 
of their walls down, or skip their turn and charge their barge power. When moving, if a player has the other player 
right in front of them, then they may leap frog that player. When placing walls, there must still be a legal path that 
still allows the other player to reach the opposite side of the board. If it completely blocks off the player, then the
 wall cannot be placed there. Once a player has run out of walls then they cannot use this action. Instead of moving or placing a wall, 
 the player can instead skip their turn and charge their barge power. Then, next turn or any turn after that they can use the barge attack on any wall
to permanently destroy it from the game. Once the power is used it needs to be charged again. A player can only have 1 barge power
at a time. Once a player reaches the other side of the board, then that player is crowned the winner

 

Game Mechanics:
    - Players can move their piece one space orthogonally
    - Players can place down a wall in a legal spot
    - Players can charge their barge power if they don't currently have it
    - Players can use their barge power if it was previously charged

*/





/*
create player with attributes: position, barge, color
set player turn to 1
init empty list for walls places
set tan pawn position to bottom row middle square
set white pawn position to top row middle square
create list from 1-25 for the 25 squares
set game over variable to false


call nextPlayerTurn()
*/
function nextPlayerTurn(){
    /* 
    if game over is true then end game and the player who just went wins
    update player turn element on css to the current players turn
    if player.barge is true then set emptybarge element display to none
    
    
    */
}
function restartGame(){
    /* set player properties back to default
    clear walls list
    get all elements in class brokenwallx and brokenwally 
    add back wallx class to brokenwallx elements and wally to brokenwally
    remove brokenwally and brokenwallx
    set player turn to 1
    callNextPlayerTurn()
    */
}
function placeWall(id){
    /*
    if wall has been placed there
        return

    update wall list with this wall id to show there is a wall there
    change wall color to yellow using id
    update player turn to next player
    callNextPlayerTurn()
    */
}

function legalWallPlace(id){
    /* 
    add wall to wall list
    path finding algorithm to see if a path can be made from bottom of board to top
    
    if it can be found then return true
    otherwise return false
    */
}



function placePawn(id){
    /*
    check players turn
    check if there is a legal move for the current position of pawn using legalMove(player #)
    if click is not in legal position to move
        return

    update player position to new square
    update css of pawn location
    update player turn to next player
    check if player has won and if they have then set game_over to true
    callNextPlayerTurn()
    */
}

function charge(){
    /*
    check players turn
    set player barge ability to true
    update player turn to next player
    callNextPlayerTurn()
    */
}

function barge(id){
    /*
    if barge was already activated (check with id to see what icon was pressed)
        set barge highlighted icon display to none
        then return

    set barge highlighted icon display to block
    get all walls from wall list (walls that are currently on the board)
    add the class bargewall to each wall (so they turn red on hover)
    add onclick attribute to all walls that calls function breakWall(wall id)

    */
}

function breakWall(id){
    /* 
    remove class bargewall from all walls in wall list
    remove attribute onclick breakWall from all walls in wall list
    set barge highlighted icon display to none
    set current players barge to false
    update player turn to next player
    remove wall from wall list
    get wall id
    if id == wally..
        remove class wally
        add class brokenwally 
    else if id == wallx..
        remove class wallx
        add class brokenwallx 
    
    callNextPlayerTurn()
    */
   
}

function legalMove(player){
    /*
    initialize list of 4 directions
    get players position
    check all 4 directions from player
    if there is a wall or border in way of direction then remove that direction from list
    if there is a pawn in one direction, check if the next square after that is a wall or border
        then remove direction if thats true
    return list of positions player can move
    */
}

function displayCharge(){
    // set bargedisabled icon display to none
}

function displayDisabled(){
    //set bargedisabled icon display to inline-block
}

function helpMenu(){
    //set help menu display to block
    //set x display to block
}

function closeMenu(){
    //set help menu display to none
    //set x display to none
}