var assert = require("assert");
var TetrisAI = require('../lib/tetris_ai');

function makeMap() {
    var map=[];
    for (var i=0; i<arguments.length; i++) {
        var row = [];
        for(var j=0; j<arguments[i].length; j++) {
           row.push(arguments[i][j]);
        }
        map.push(row);
    }
    return map;
}

describe('TetrisAI', function(){
  describe('Object itself', function(){
    it('TetrisAI can be instantiated and is an object', function(){
        var ai = new TetrisAI();
        assert(typeof ai == "object");
    });

    it('Should instantiate an object with type TetrisAI', function(){
        var ai = new TetrisAI();
        assert(ai instanceof TetrisAI);
    });
  });

  it('#decideMove returns a result that isnt undefined', function() {
    var ai = new TetrisAI();
    var map = makeMap("   ");
    var move = ai.decideMove(map); 
    assert(typeof move != "undefined");
  });

  it('#decideMove should choose the bottom left corner if the map is empty', function() {
    var ai = new TetrisAI();
    var map = makeMap(
        "      ",
        "      ",
        "      ",
        "      ",
        "      ");
    var move = ai.decideMove(map);

    assert(move == 0); 

  });

  it('', function() {

  });
});
