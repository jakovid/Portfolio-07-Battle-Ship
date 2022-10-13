import { computerGameBoardInfo } from "./computerGameBoardInfo";
import { playerGameBoardInfo } from "./playerGameBoardInfo";
import { buildGameBoard } from "./buildGameBoard";

function hitOrMiss(boardType, domDestination, rowIndex, columnIndex) {
    let board = (boardType == 'player' ? playerGameBoardInfo : computerGameBoardInfo)
    console.log(board[rowIndex][columnIndex]);

    board[rowIndex][columnIndex] = (board[rowIndex][columnIndex] === 's' ? 'x' : 'o');

    console.log(board[rowIndex][columnIndex]);

    buildGameBoard(boardType, domDestination);
};

export { hitOrMiss };