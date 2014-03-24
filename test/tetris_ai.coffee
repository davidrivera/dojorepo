Tetris_ai  = require("../lib/tetris_ai")
tetris_ai = null

describe 'Tetris_ai', ->
  describe '#constructor', ->
    before ->
      tetris_ai = new Tetris_ai

    it 'should return an instance of Tetris_ai', ->
      tetris_ai.should.be.an.instanceof(Tetris_ai)