'use strict';

(function () {
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var wizardCoat = window.setup.setup.querySelector('.setup-wizard .wizard-coat');
  var wizardEye = window.setup.setup.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireball = window.setup.setup.querySelector('.setup-fireball-wrap');

  var colorizeElement = function (element, color, action) {
    action();
  };

  var renderCoatColorUserWizard = function () {
    wizardCoat.addEventListener('click', colorizeElement(wizardCoat, window.setup.COAT_COLORS[window.utill.isRandomNumberEvent(0, window.setup.COAT_COLORS.length)], window.colorize.fillElement));
  };

  renderCoatColorUserWizard();

  var renderEyeColorUserWizard = function () {
    wizardEye.addEventListener('click', colorizeElement(wizardEye, window.setup.EYES_COLORS[window.utill.isRandomNumberEvent(0, window.setup.EYES_COLORS.length)], window.colorize.fillElement));
  };

  renderEyeColorUserWizard();

  var renderFireballColorUserWizard = function () {
    wizardFireball.addEventListener('click', colorizeElement(wizardFireball, FIREBALL_COLORS[window.utill.isRandomNumberEvent(0, FIREBALL_COLORS.length)], window.colorize.changeElementBackground));
  };

  renderFireballColorUserWizard();
})();
