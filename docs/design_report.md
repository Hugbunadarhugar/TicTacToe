# Design report
## Team
### Team name:
Hugbúnaðarhugar
### Team members:
- Dagrún Ósk Jónasdóttir
- Guðrún Sara Örnólfsdóttir
- Hugrún Hannesdóttir
- Júlía Ingadóttir
- Jóhann Hinrik Jónsson
- Natalia López Peralta
- Þorgeir Kristján Þorgeirsson

## Introduction
This report presents a design of a TicTacToe web application made for the course SC-T-303
Hugbúnaðarfræði at Reykjavík University. The project revolves around implementing a TicTacToe game board to be played online while using coding practices that have been taught in the course. The game itself is intended for two players, X and O, who take turns marking the spaces in a 3x3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game.
The team began by visualizing the Git setup for the project. In particular, how the branching should be structured to achieve the best TDD implementation. Although this initial setup was a good way to visualize the project and get the team started, we ended up with a bit of a different structure. Following are images of both the initial setup and the structure of the end product along with a text explanation. The team also created a state diagram in order to describe the behavior of the system.
## State diagram
IMAGE

The state diagram for the system is pretty simple. Once the application is opened, the game is afoot. Both players take turns inserting their symbol into an empty field on the gameboard. When a player has succeeded in placing three of their marks in a horizontal, vertical, or diagonal row they are declared the winner and the game is over. If no fields on the game board are empty and no player has been declared a winner, the game results in a draw. Players can then choose to click on the ,,New Game” button to begin a new game with an empty game board. They can also choose not to begin a new game, leaving the system in a final state.

## Initial branch structure
IMAGE
In the initial sketch of the TDD release schedule, we decided to include a master, release and development branch. The development branch is intended to be the main working branch. Other branches would be made from the development branch to implement specific features in the project. These branches should be named F1, F2, F3 and so on. Once ready they would be merged with the development branch. Once the system is able to run particular commands without breaking down, the development branch will be merged with the release branch. This means that when the development is merged with the release branch for the first time, we have successfully made the first release of the project. Finally, when the system is able to run every command according to the projects description, the release branch is merged with the master branch. The system is then ready to be submitted to Canvas for grading.
## End product branch structure
IMAGE
The branch structure of the end product was similar to the initial structure. During a lab assignment class a TA advised us to discard our plan of having a release branch. Instead we should use the intended master, development and feature branches. Once the coding started we realized that some feature branches had become the development branch, resulting in feature branches branching out from other fature branches. The development branch was used until the feature branch F4. From thereon out feature branches where merged directly to the master branch. In the end everything had been merged to the master branch and all other branches where removed.
