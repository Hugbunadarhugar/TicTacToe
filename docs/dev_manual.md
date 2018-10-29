# Development manual
## Introduction
This development manual is intended for a web application of a game called TicTacToe. The game is a remake of the well-known game called by the same name. The game is on a 3-by-3 grid and players take turns writing either X or O in an empty field on the grid. If a player gets three of the same symbols on a row, horizontally, vertically or diagonal, said player is declared the winner. If there are no empty fields left and no player has been declared the winner, the game results in a draw. The game can be accessed by browser via this link. This manual is intended for new developers working on the project.
## Access to source
The source control client used is GitHub. In order to gain access to the source, developers will have to contact one of the administrators for the Hugbúnaðarhugar team. They will give access to the source code located on GitHub.
## Build environment
In order to build the project the following is required:

1. A GitHub account
2. Install git
3. Set up git
4. Clone git repository: [https://github.com/Hugbunadarhugar/TicTacToe.git](https://github.com/Hugbunadarhugar/TicTacToe.git)
5. Install Node.js and npm
6. Install webpack
    * sudo npm install -g webpack
    * sudo npm install -g webpack-cli
    * sudo npm install -g webpack-dev-server
7. Install nodemon
    * sudo npm install -g nodemon
8. Install Concurrently
    * sudo npm install -g concurrently
9. Install markdown-pdf
    * sudo npm install -g markdown-pdf

To run the project locally, use the following commands:
* npm run build (to build the project and update the bundle, only on client side)
* npm start (to start the server, it listens on port 8080)

## Tests
The unit tests are stored within each JavaScript file respectively in a .test.js file. The tests are run with the following command npm test.