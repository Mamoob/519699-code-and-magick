'use strict';

(function () {
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
  var form = setup.querySelector('.setup-wizard-form');

  similarItems.classList.remove('hidden');

  var renderWizard = function (wizard) {
    var wizardElement = wizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var fillElement = function (element, color) {
    element.style.fill = color;
  };

  var changeElementBackground = function (element, color) {
    element.style.backgroundColor = color;
  };

  var successDownloadHandler = function (wizards) {
    var random = window.utill.isRandomNumberEvent(0, 12);

    var fragmentSimilarPlayer = document.createDocumentFragment();

    for (var j = random; j < random + QUANTITY_WIZARDS; j++) {
      fragmentSimilarPlayer.appendChild(renderWizard(wizards[j]));
    }
    similarPlayer.appendChild(fragmentSimilarPlayer);
  };

  var errorDownloadHandler = function (errorMessage) {
    var node = document.createElement('div');

    node.classList.add('error-text');
    node.textContent = errorMessage;

    document.body.insertAdjacentElement('afterbegin', node);
  };

  var successUploadHandler = function () {
    form.classList.add('hidden');
  };

  var errorUploadHandler = function (errorMessage) {
    var node = document.createElement('div');

    node.classList.add('error-text');
    node.textContent = 'Произошла ошибка отправки данных: ' + errorMessage;
  };

  similarPlayer.appendChild(fragment);

  wizardCoat.addEventListener('click', function () {
    window.colorizeElement.colorizeElement(wizardCoat, COAT_COLORS[window.utill.isRandomNumberEvent(0, COAT_COLORS.length - 1)], fillElement);
  });

  wizardEye.addEventListener('click', function () {
    window.colorizeElement.colorizeElement(wizardEye, EYES_COLORS[window.utill.isRandomNumberEvent(0, EYES_COLORS.length - 1)], fillElement);
  });

  wizardFireball.addEventListener('click', function () {
    window.colorizeElement.colorizeElement(wizardFireball, FIREBALL_COLORS[window.utill.isRandomNumberEvent(0, FIREBALL_COLORS.length - 1)], changeElementBackground);
  });

  window.backend.load(successDownloadHandler, errorDownloadHandler);

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();

    window.backend.save(new FormData(form), successUploadHandler, errorUploadHandler);
  });

  window.setup = {
    setup: setup
  };
})();
