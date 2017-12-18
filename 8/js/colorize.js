'use strict';

(function () {
  var fillElement = function (element, color) {
    element.style.fill = color;
  };

  var changeElementBackground = function (element, color) {
    element.style.backgroundColor = color;
  };

  window.colorize = {
    fillElement: fillElement,
    changeElementBackground: changeElementBackground
  };
})();
