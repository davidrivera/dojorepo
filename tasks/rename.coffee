# Ensure filenames are using the name defined in package.json.
# https://github.com/jdavis/grunt-rename

module.exports = (grunt) ->

  grunt.config.data.rename =
    bin_path:
      src : "bin/tetris_ai"
      dest: "bin/<%= pkg.name %>"
    src_directory:
      src : "src/tetris_ai"
      dest: "src/<%= pkg.name %>"
    src_path:
      src : "src/tetris_ai.coffee"
      dest: "src/<%= pkg.name %>.coffee"
    test_directory:
      src : "test/tetris_ai"
      dest: "test/<%= pkg.name %>"
    test_path:
      src : "test/tetris_ai.coffee"
      dest: "test/<%= pkg.name %>.coffee"

  grunt.loadNpmTasks "grunt-rename"