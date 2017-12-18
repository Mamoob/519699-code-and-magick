'use strict';

(function () {
  var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var QUANTITY_WIZARDS = 4;
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var setup = document.querySelector('.setup');
  var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var similarItems = setup.querySelector('.setup-similar');
  var similarPlayer = setup.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();
  var wizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
  var wizardEye = setup.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireball = setup.querySelector('.setup-fireball-wrap');

  similarItems.classList.remove('hidden');

  var getWizardProperty = function () {
    return {
      name: NAMES[window.utill.isRandomNumberEvent(0, NAMES.length - 1)],
      surname: SURNAMES[window.utill.isRandomNumberEvent(0, SURNAMES.length - 1)],
      coatColor: COAT_COLORS[window.utill.isRandomNumberEvent(0, COAT_COLORS.length - 1)],
      eyesColor: EYES_COLORS[window.utill.isRandomNumberEvent(0, EYES_COLORS.length - 1)]
    };
  };

  var renderWizard = function (wizard) {
    var wizardElement = wizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.surname;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var fillElement = function (element, color) {
    element.style.fill = color;
  };

  var changeElementBackground = function (element, color) {
    element.style.backgroundColor = color;
  };

  for (var i = 0; i < QUANTITY_WIZARDS; i++) {
    fragment.appendChild(renderWizard(getWizardProperty()));
  }

  similarPlayer.appendChild(fragment);

  window.colorizeElement.colorizeElement(wizardCoat, COAT_COLORS[window.utill.isRandomNumberEvent(0, COAT_COLORS.length - 1)], fillElement);

  window.colorizeElement.colorizeElement(wizardEye, EYES_COLORS[window.utill.isRandomNumberEvent(0, EYES_COLORS.length - 1)], fillElement);

  window.colorizeElement.colorizeElement(wizardFireball, FIREBALL_COLORS[window.utill.isRandomNumberEvent(0, FIREBALL_COLORS.length - 1)], changeElementBackground);

  window.setup = {
    setup: setup
  };
})();
