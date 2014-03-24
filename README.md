##Tetris_ai

Node.js package template.

###Goals

* Use widely accepted practices and libraries
* Automate the creation and renaming of projects
* Projects share git history for easy updates
* Add functionality through template [branches](https://github.com/winton/tetris_ai/branches)

###Install

	npm install tetris_ai -g

###Create a new project

	tetris_ai <project-name> <branch>

Available branches:

* **master** - Base npm package template *(default)*
* [**aws-dynamo**](https://github.com/winton/tetris_ai/tree/aws-dynamo) - Dynamo DB
* [**aws-dynamo-express**](https://github.com/winton/tetris_ai/tree/aws-dynamo-express) - Dynamo DB + Express
* [**bookshelf**](https://github.com/winton/tetris_ai/tree/bookshelf) - Bookshelf.js database ORM
* [**bookshelf-express**](https://github.com/winton/tetris_ai/tree/bookshelf-express) - Bookshelf + Express
* [**express**](https://github.com/winton/tetris_ai/tree/express) - Express.js web server

###Coffeescript (optional)

Run `grunt` to watch for Coffeescript changes in `src` and compile them to `lib`.

###Start working

Run `grunt` to watch for changes in `src` and compile them to `lib`.

###Tests

Run `grunt mocha` to execute your test suite with coverage statistics.

The `npm test` command runs the test suite without coverage (Travis-CI).

### Contribute

[Create an issue](https://github.com/winton/tetris_ai/issues/new) to discuss template changes.

Pull requests for template changes and new branches are even better.

### Stay up to date

[Watch this project](https://github.com/winton/tetris_ai#) on Github.

[Follow Winton Welsh](http://twitter.com/intent/user?screen_name=wintonius) on Twitter.
