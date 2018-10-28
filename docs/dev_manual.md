# Development manual
## Introduction
This development manual is intended for a web application of a game called TicTacToe. The game is a remake of the well-known game called by the same name. The game is on a 3-by-3 grid and players take turns writing either X or O in an empty field on the grid. If a player gets three of the same symbols on a row, horizontally, vertically or diagonal, they are declared the winner. If there are no empty fields left and no player has been declared the winner, the game results in a draw. The game can be accessed by browser via this link. This manual is intended for new developers working on the project.
## Access to source
The source control client used is GitHub. In order to gain access to the source, developers will have to contact one of the administrators for the Hugbúnaðarhugar team. They will give access to the source code located on GitHub.
## Build environment
In order to build the project the following is required:

1. A GitHub account
2. The JRE (Java Runtime Environment) needs to be installed
3. Clone the project to a local machine
4. Install webpack
    * sudo npm install -g webpack
    * sudo npm install -g webpack-cli
    * sudo npm install -g webpack-dev-server
5. Install nodemon
    * sudo npm install -g nodemon
6. Install Concurrently
    * sudo npm install -g concurrently
7. Install markdown-pdf
    * sudo npm install -g markdown-pdf

To run the project locally, use the following commands:
* npm build (to build the project)
* npm run (to run the project)
* npm start (to start the server, it listens on port 5000)

## Tests
The unit tests are stored within each JavaScript file respectively in a .test.js file. The tests are run with the following command npm test.