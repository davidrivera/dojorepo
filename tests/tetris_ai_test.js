var assert = require("assert")
var TetrisAI = require('../lib/tetris_ai')

describe('TetrisAI', function(){
  describe('Object itself', function(){
    it('TetrisAI can be instantiated and is an object', function(){
        var ai = new TetrisAI();
        console.log(typeof ai)
        assert(typeof ai == "object")
        assert(ai.prototype == TetrisAI)
    })
  })
})
