# Flip Book Generator

Create an interactive flip-book from a group of images.

![Preview](https://raw.githubusercontent.com/nuxy/flip-book-gen/master/package.gif)

## Features

- Easy to set-up and customize. **No dependencies**.

Checkout the [demo](https://nuxy.github.io/flip-book-gen) for examples of use.

## Dependencies

- [Node.js](https://nodejs.org)

## Installation

Install the package into your project using [NPM](https://npmjs.com), or download the [sources](https://github.com/nuxy/flip-book-gen/archive/master.zip).

    $ npm install flip-book-gen

## Usage

There are two ways you can use this package.  One is by including the JavaScript/CSS sources directly.  The other is by importing the module into your component.

### Script include

After you [build the distribution sources](#cli-options) the set-up is fairly simple..

```html
<script type="text/javascript" src="path/to/flip-book.min.js"></script>
<link rel="stylesheet" href="path/to/flip-book.min.css" media="all" />

<script type="text/javascript">
  flipBook(container, images, options);
</script>
```

### Module import

If your using a modern framework like [Aurelia](https://aurelia.io), [Angular](https://angular.io), [React](https://reactjs.org), or [Vue](https://vuejs.org)

```javascript
import FlipBook from 'flip-book-gen';
import 'flip-book-gen/dist/flip-book.css';

const flipBook = new FlipBook(container, images, options);
```

### HTML markup

```html
<div id="flip-book" class="flip-book"></div>
```

## Developers

### CLI options

Run [ESLint](https://eslint.org) on project sources:

    $ npm run lint

Transpile ES6 sources (using [Babel](https://babeljs.io)) and minify to a distribution:

    $ npm run build

## Contributions

If you fix a bug, or have a code you want to contribute, please send a pull-request with your changes. (Note: Before committing your code please ensure that you are following the [Node.js style guide](https://github.com/felixge/node-style-guide))

## Versioning

This package is maintained under the [Semantic Versioning](https://semver.org) guidelines.

## License and Warranty

This package is distributed in the hope that it will be useful, but without any warranty; without even the implied warranty of merchantability or fitness for a particular purpose.

_flip-book-gen_ is provided under the terms of the [MIT license](http://www.opensource.org/licenses/mit-license.php)

## Author

[Marc S. Brooks](https://github.com/nuxy)
