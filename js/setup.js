'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var similarItems = setup.querySelector('.setup-similar');
  var similarPlayer = setup.querySelector('.setup-similar-list');
  var form = setup.querySelector('.setup-wizard-form');

  similarItems.classList.remove('hidden');

  var renderWizard = function (wizard) {
    var wizardElement = wizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var addWizards = function (wizard) {
    var fragmentSimilarPlayer = document.createDocumentFragment();
    var takeNumber = wizard.length > 4 ? 4 : wizard.length;

    similarPlayer.innerHTML = '';

    for (var i = 0; i < takeNumber; i++) {
      fragmentSimilarPlayer.appendChild(renderWizard(wizard[i]));
    }
    similarPlayer.appendChild(fragmentSimilarPlayer);
  };

  var successUploadHandler = function () {
    form.classList.add('hidden');
  };

  var errorUploadHandler = function (errorMessage) {
    var node = document.createElement('div');

    node.classList.add('error-text');
    node.textContent = 'Произошла ошибка отправки данных: ' + errorMessage;
  };

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();

    window.backend.save(new FormData(form), successUploadHandler, errorUploadHandler);
  });

  window.setup = {
    setup: setup,
    addWizards: addWizards
  };
})();
