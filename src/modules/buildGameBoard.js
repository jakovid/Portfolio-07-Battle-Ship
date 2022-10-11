import { playerGameBoardInfo } from "./playerGameBoardInfo";
import { computerGameBoardInfo } from "./computerGameBoardInfo";

function buildGameBoard(boardType, domDestination) {
    let gameBoardValues = (boardType == 'player' ? playerGameBoardInfo : computerGameBoardInfo);
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            //create element
            let gameSquare = document.createElement('div');

            //add value
            gameSquare.innerHTML = gameBoardValues[i][j];

            //event listeners
            if (boardType == 'computer') {
                gameSquare.classList = 'gameSquare computerSquare';
            } else {
                gameSquare.classList = 'gameSquare playerSquare';
            }

            //append
            domDestination.append(gameSquare);
        }
    }
}

export { buildGameBoard };