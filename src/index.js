import { buildHeader } from "./modules/buildHeader";
import { buildGameBoard } from "./modules/buildGameBoard";

(function(){
    var battleShipModule = {
        cacheDom: function() {
            let battleshipMain = document.getElementById('battleshipMain');
            let playerOneGameBoard = document.getElementById('playerOneGameBoard');
            let playerTwoGameBoard = document.getElementById('playerTwoGameBoard');
        },
        init: function() {
            battleShipModule.cacheDom();
            buildHeader();
            buildGameBoard('player', playerOneGameBoard);
            buildGameBoard('computer', playerTwoGameBoard);
        },

    }
    battleShipModule.init();
})();