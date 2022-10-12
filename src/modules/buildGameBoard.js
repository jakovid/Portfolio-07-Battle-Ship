import { playerGameBoardInfo } from "./playerGameBoardInfo";
import { computerGameBoardInfo } from "./computerGameBoardInfo";

function buildGameBoard(boardType, domDestination) {
    let gameBoardValues = (boardType == 'player' ? playerGameBoardInfo : computerGameBoardInfo);
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            //create element
            let gameSquare = document.createElement('div');

            //event listeners
            if (boardType == 'computer') {
                gameSquare.classList = 'gameSquare computerSquare';
            } else {
                gameSquare.classList = 'gameSquare playerSquare';
            }

            //add special class
            if (gameBoardValues[i][j] === 's' && boardType == 'player') {
                gameSquare.classList.add('shipSquare');
            };

            //append
            domDestination.append(gameSquare);
        }
    }
}

export { buildGameBoard };