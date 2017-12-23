'use strict';

(function () {
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var setup = document.querySelector('.setup');
  var similarItems = setup.querySelector('.setup-similar');
  var wizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
  var wizardEye = setup.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireball = setup.querySelector('.setup-fireball-wrap');
  var wizards = [];
  var coatColor;
  var eyesColor;
  var fireballColor;
  var lastTimeout;

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;

    } else if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }
    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;

    } else if (left < right) {
      return -1;

    } else {
      return 0;
    }
  };

  var fillElement = function (element, color) {
    element.style.fill = color;
  };

  var changeElementBackground = function (element, color) {
    element.style.backgroundColor = color;
  };

  var updateWizards = function () {
    window.setup.addWizards(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);

      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  var successDownloadHandler = function (data) {
    wizards = data.slice(0);

    updateWizards();
    similarItems.classList.remove('hidden');
  };

  var errorDownloadHandler = function (errorMessage) {
    var node = document.createElement('div');

    node.classList.add('error-text');
    node.textContent = errorMessage;

    document.body.insertAdjacentElement('afterbegin', node);
  };

  wizardCoat.addEventListener('click', function () {
    if (lastTimeout) {
      clearTimeout(lastTimeout);
    }
    lastTimeout = setTimeout(function () {
      updateWizards();
    }, 500);

    coatColor = COAT_COLORS[window.utill.isRandomNumberEvent(0, COAT_COLORS.length - 1)];
    window.colorizeElement.colorizeElement(wizardCoat, coatColor, fillElement);
  });

  wizardEye.addEventListener('click', function () {
    if (lastTimeout) {
      clearTimeout(lastTimeout);
    }
    lastTimeout = setTimeout(function () {
      updateWizards();
    }, 500);

    eyesColor = EYES_COLORS[window.utill.isRandomNumberEvent(0, EYES_COLORS.length - 1)];
    window.colorizeElement.colorizeElement(wizardEye, eyesColor, fillElement);
  });

  wizardFireball.addEventListener('click', function () {
    if (lastTimeout) {
      clearTimeout(lastTimeout);
    }
    lastTimeout = setTimeout(function () {
      updateWizards();
    }, 500);

    fireballColor = FIREBALL_COLORS[window.utill.isRandomNumberEvent(0, FIREBALL_COLORS.length - 1)];
    window.colorizeElement.colorizeElement(wizardFireball, fireballColor, changeElementBackground);
  });
  window.backend.load(successDownloadHandler, errorDownloadHandler);
})();
