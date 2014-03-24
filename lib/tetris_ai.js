function TetrisAI() {

}

TetrisAI.prototype.decideMove = function(map) {

    for(var i=0; i < map.length; i++){
        for( var j = 0; j < map[0].length; j++){
            if(!map[i][j]){
                return j; 
            }
        }
    }
    return 1;
};



module.exports = exports = TetrisAI
