for key, value of require('./tetris_ai/common')
  eval("var #{key} = value;")

module.exports = class Tetris_ai
  constructor: ->