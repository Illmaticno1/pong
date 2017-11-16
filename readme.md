# Pong

This is a multiplayer game in which two players move their respective div items in order to volley an object past the opposite players boundary. player1 is represented by the color red and player2 will be blue. At the end of each round the score will increment and players will have the option to restart the game or continue to the next round.


## link

https://illmaticno1.github.io/pong/
Following this link will afford you the opportunity to test the game in its current phase.

### technologies used
global variables as well as local variables

an if statement to create the functions to move each player div.

a switch statement was used to determine which key was pressed and to employ the player div movement functions.

another if statement was used to determine if the "ball" left the container div and at what position in order to increment the respective scores.

again an if statement was used to determine whether there was a collision between a div and the "ball".

i created a play function in which most of all the other functions pass through in an attempt at making my code more DRY.

I used setInterval in order to move the "ball" continuously.

clear interval was used in order to stop that continuous movement state.

Again an if statement was used to see if the variable points was true (a player scored) then it would increment that particular players score.

In order to move the ball object I employed the .css method in conjunction with parseInt to increase or decrease the position depending on the state.


#### unresolved issues
the sides of the container weren't supposed to allow the ball object to pass through and needs to be fixed.

in order to deploy the second round i had to remove the original ball object and replace it which would cause me to have to rewrite the movement functions for the ball.

I still have an issue with keeping the speed of the ball object constant (linear).
