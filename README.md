# Flip Book Generator

Create an interactive flip-book from a group of images.

![Preview](https://raw.githubusercontent.com/nuxy/flip-book-gen/master/package.gif)

## Features

- Configurable transitions/transforms for flip animations.
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

## Images configuration

Standard array.  The more images provided greatly improves the animation experience.

### Example

```javascript
const images = [
  'path/to/image1.png',
  'path/to/image2.png',
  'path/to/image3.png',
  'path/to/image4.png',
  'path/to/image5.png',
  'path/to/image6.png',

  // add more images ...
];
```

## Flip Book options

Customization and overriding defaults can be done using the following options:

| Option      | Description                     | Type   | Default |
|-------------|---------------------------------|--------|---------|
| pageHeight  | Image source height (in pixels) | Number | 175     |
| pageWidth   | Image source width (in pixels)  | Number | 300     |
| transDelay  | Transition delay (milliseconds) | Number | 200     |

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

Steamboat Willie is a creative work by [Walt Disney](https://thewaltdisneycompany.com/news/mickey-mouse-95-anniversary-steamboat-willie-script) now in the public domain.

## Author

[Marc S. Brooks](https://github.com/nuxy)
