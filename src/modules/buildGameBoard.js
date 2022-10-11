function buildGameBoard(boardType, domDestination) {
    for (let i = 0; i < 100; i++) {
        //create element
        let gameSquare = document.createElement('div');

        //add class
        gameSquare.classList = 'gameSquare';

        //event listeners
        if (boardType == 'player') {
            //player
        } else {
            //computer
        }

        //append
        domDestination.append(gameSquare);
    }
}

export { buildGameBoard };