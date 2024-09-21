// direct equivalent to previous example
let CustomHTMLElement = (function() {
  'use strict';

  const CustomHTMLElement = function(element) {
    // make sure the function was called with new
    if (typeof new.target === 'undefined') {
      throw new Error('Constructor must be called with new.');
    }

    this.element = element;
  };

  Object.defineProperty(CustomHTMLElement.prototype, 'html', {
    enumerable: false,
    configurable: true,
    get: function() {
      return this.element.innerHTML;
    },
    set: function(value) {
      this.element.innerHTML = value;
    }
  });

  return CustomHTMLElement;
})();
