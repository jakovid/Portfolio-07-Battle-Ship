import { playerGameBoardInfo } from "./playerGameBoardInfo";
import { computerGameBoardInfo } from "./computerGameBoardInfo";
import { hitOrMiss } from "./hitOrMiss";

function buildGameBoard(boardType, domDestination) {
    let gameBoardValues = (boardType == 'player' ? playerGameBoardInfo : computerGameBoardInfo);
    //clear board
    domDestination.innerHTML = '';

    //build game squares
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            //create element
            let gameSquare = document.createElement('div');

            //add classes
            if (boardType == 'computer') {
                gameSquare.classList = 'gameSquare computerSquare';
            } else {
                gameSquare.classList = 'gameSquare playerSquare';
            }

            //add special class
            if (gameBoardValues[i][j] === 's' && boardType == 'player') {
                gameSquare.classList.add('shipSquare');
            } else if (gameBoardValues[i][j] === 'x') {
                gameSquare.classList.add('hitSquare');
            } else if (gameBoardValues[i][j] === 'o') {
                gameSquare.classList.add('missSquare');
            };

            //add event listners
            gameSquare.addEventListener('click', e => {
                hitOrMiss(boardType, domDestination, i, j);
            });

            //append
            domDestination.append(gameSquare);
        }
    }
}

export { buildGameBoard };