'use strict';

(function () {
  var colorizeElement = function (element, color, callback) {

    element.addEventListener('click', function () {
      callback(element, color);
    });
  };

  window.colorizeElement = {
    colorizeElement: colorizeElement
  };
})();
