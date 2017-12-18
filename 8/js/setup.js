'use strict';

(function () {
  var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var QUANTITY_WIZARDS = 4;

  var setup = document.querySelector('.setup');
  var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var similarItems = setup.querySelector('.setup-similar');
  var similarPlayer = setup.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();

  // setup.classList.remove('hidden');
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

  for (var i = 0; i < QUANTITY_WIZARDS; i++) {
    fragment.appendChild(renderWizard(getWizardProperty()));
  }

  similarPlayer.appendChild(fragment);

  window.setup = {
    setup: setup,
    COAT_COLORS: COAT_COLORS,
    EYES_COLORS: EYES_COLORS
  };
})();