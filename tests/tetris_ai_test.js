var assert = require("assert")
var TetrisAI = require('../lib/tetris_ai')

function makeMap() {
    var map=[]
    for (var i=0; i<arguments.length; i++) {
        for(var j=0; j<arguments[i].length; j++) {

        }
    }
}

describe('TetrisAI', function(){
  describe('Object itself', function(){
    it('TetrisAI can be instantiated and is an object', function(){
        var ai = new TetrisAI()
        assert(typeof ai == "object")
    })

    it('Should instantiate an object with type TetrisAI', function(){
        var ai = new TetrisAI()
        assert(ai instanceof TetrisAI)
    })
  })

  it('', function() {
    var ai = new TetrisAI()
    var map = 5;
    ai.decideMove(map)
  })

  it('', function() {

  })
})
