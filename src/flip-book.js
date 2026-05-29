/**
 *  flip-book-gen
 *  Create an interactive flip book from a group of images.
 *
 *  Copyright 2026, Marc S. Brooks (https://mbrooks.info)
 *  Licensed under the MIT license:
 *  http://www.opensource.org/licenses/mit-license.php
 */

'use strict';

/**
 * @param {Element} container
 *   Containing HTML element.
 *
 * @param {Array} images
 *   Flip Book images.
 *
 * @param {Object} options
 *   Configuration overrides (optional).
 */
function FlipBookGen(container, images = [], options = {}) {
  const self = this;

  const defaults = {
    pageHeight: 175,
    pageWidth:  300,
    transDelay: 200
  };

  (function() {
    self.options = Object.assign(defaults, options);

    if (images.length > 3) {
      renderFlipBook(images);
    } else {
      throw new Error('Failed to initialize (missing settings)');
    }
  })();

  /**
   * Render a new flip book instance.
   */
  function renderFlipBook(images) {
    container.classList.add('flip-book');
    container.style.height = `${self.options.pageHeight}px`;
    container.style.width  = `${self.options.pageWidth}px`;

    const spline = document.createElement('div');
    spline.classList.add('spline');
    spline.style.backgroundImage = `url(${images[0]})`;
    spline.style.zIndex = images.length + 1;

    container.appendChild(spline);

    for (let i = 0; i < images.length; i++) {
      const page = document.createElement('div');
      page.classList.add('page');
      page.style.backgroundImage = `url(${images[i]})`;
      page.style.zIndex = images.length - i;

      // Delay per-page animation.
      page.style.transitionDelay = `${self.options.transDelay * i}ms`;

      container.appendChild(page);
    }
  }

  return self;
}

/**
 * Set global/exportable instance, where supported.
 */
window.flipBookGen = function(container, settings, options) {
  return new FlipBookGen(container, settings, options);
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = FlipBookGen;
}
