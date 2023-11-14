Reflection

- In the very beginning, I wanted to create a game inspired by quoridor with a new twist
- Since you could add walls in that game, I wanted a power where you could break them but I also wanted it to be balanced
- If you could always choose to break a wall, then that would become the dominant strategy so I made it so you need to waste two turns breaking the wall before you can move through it
- The original quoridor game has a 9x9 grid that I first tried to implement but at the time of a2 I thought the complexity would be too much so I changed it to a smaller board
- With the added barge power, it could make the game still intense on a smaller board
- I also originally tried to implement walls that covered two square at a time similar to the original game, but I also ran into the problem of trying to execute that with the html code during a2
- In the final implementation of a2, I made it so that the walls only take up a single square instead
  
- Without being able to work on the javascript, it was difficult to visualize how I wanted the code to be organized
- There were some things I wanted implemented through there including the animations and the pawns so they were left off the html and css part
- There were also some ways I wanted to implement code that I realized later on would not be possible
- For instance, I orignally had the walls turn red through the css but when I started on the javascript I figured out that it would be much more feasible to do it in it's own function
- I also realized that there were better ways to implement my code as opposed to the pseudocode I wrote
- It definitely showed me that even if you think you have it all planned out perfectly, there can be certain things you will need to change later on through trial and error
- Actually writing the javascript code gave me whole new ideas on how i wanted to approach things that I couldn't see when I was just doing the html and css
- A big I changed was the way that the user moves their pawn on the board
- Originally I had a function that was called whenever a square was clicked and it checked if the user could move there
- This ended up being unintuitive as if the user didn't know how their pawn could move then they would just be clicking squares randomly
- I changed it so that there are grey pawns that show up when you hover over a square that the player can move to
- It makes it a lot easier for the player to see where they can go
- Now, if the grey pawn gets clicked then the player would move there as opposed to the square being clicked
  
- After testing the game for the first couple times, I ran into some balancing issues I didn't see before
- Whenever I would play the game against an opponent, player 1 would always seem to win since they get the first move
- I tried to tinker with this by adding a free barge attack to player 2 but that seemed to tip the scales too far to the other side
- I remebered that this kind of thing would not happen in the original game
- It could be a result of the board size being much smaller
- Another thing I changed was that the walls only take up a single space
- This had a weird effect on the game as you aren't able to block off your oppenents as effectively
- Every time you'd have to block the opponent by putting walls in front of them until they reach the edge of the board
- There wasn't a lot of strategic depth in this compared to being able to block off two squares which would allow for more options on how you can box out opponents
- Changing the walls to take up two spaces would add this depth and give the second player a fighting chance to win if they were startegic enough
- Through tinkering with javascript, I was able to find a way to have double walls that I could not see before when I was planning it out
- I ended up changing the highlight walls from css code to javascript code and was able to get it so the walls take up two spaces

- I decided I wouldn't use AI at all when coding this assignment, as I wanted to challenge myself
- I wanted to come up with the solutions on my own as it will help me become better at coding
- I originally chose quoridor as I thought the complexity would be very low, but as I went on with the assignment I realized it was more complex than I thought
- Having to keep track of all wall positions as well as player positions and collisions between them was something I needed to wrap my head around
- Also, needing to create a pathfinding algorithm for when a wall is placed so that it doesn't block off any player's routes
- The path finding algorithm was something I didn't completely understand how I would implement when I was finishing a2
- As I began to code the walls and pawns and the collisions between them, it became a lot more clear and what I needed to do for the path finding
- Having a depth first search was the best option as I only needed to find a single path to each side of the board and I needed it to be efficient so that the wall highlights would be instantaneous
- In the end I used similar code to the collisions in the depth-first search to complete it

- In the end, I believe the final project is very similar to my originally design
- I made a couple of quality of life improvements when I started implementing, but the main idea and look is the same
- I had planned out how pawns, walls, and barge powerups would work as they are the main gameplay elements and they stayed the same throughout the process
- The only difference is the size of the walls, but I feel that this change makes the gameplay much better
- All css elements were the same except for some new animations added through the use of javascript
- Im happy with how it turned out as it is very similar to how I first pictured it when I started the project
