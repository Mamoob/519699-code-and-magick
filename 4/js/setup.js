'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var QUANTITY_WIZARDS = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setup = document.querySelector('.setup');
var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarItems = setup.querySelector('.setup-similar');
var similarPlayer = setup.querySelector('.setup-similar-list');
var fragment = document.createDocumentFragment();
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupUserName = setup.querySelector('.setup-user-name');
var wizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
var wizardEye = setup.querySelector('.setup-wizard .wizard-eyes');
var wizardFireball = setup.querySelector('.setup-fireball-wrap');

setup.classList.remove('hidden');
similarItems.classList.remove('hidden');

var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * max);
};

var getWizardProperty = function () {
  return {
    name: NAMES[getRandomNumber(0, NAMES.length)],
    surname: SURNAMES[getRandomNumber(0, SURNAMES.length)],
    coatColor: COAT_COLORS[getRandomNumber(0, COAT_COLORS.length)],
    eyesColor: EYES_COLORS[getRandomNumber(0, EYES_COLORS.length)]
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

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

document.addEventListener('keydown', onPopupEscPress);

setupUserName.addEventListener('focus', function () {
  document.removeEventListener('keydown', onPopupEscPress);
});

setupUserName.addEventListener('blur', function () {
  document.addEventListener('keydown', onPopupEscPress);
});

var renderCoatColorUserWizard = function () {
  wizardCoat.addEventListener('click', function () {
    wizardCoat.style.fill = COAT_COLORS[getRandomNumber(0, COAT_COLORS.length)];
  });
};

renderCoatColorUserWizard();

var renderEyeColorUserWizard = function () {
  wizardEye.addEventListener('click', function () {
    wizardEye.style.fill = EYES_COLORS[getRandomNumber(0, EYES_COLORS.length)];
  });
};

renderEyeColorUserWizard();

var renderFireballColorUserWizard = function () {
  wizardFireball.addEventListener('click', function () {
    wizardFireball.style.background = FIREBALL_COLORS[getRandomNumber(0, FIREBALL_COLORS.length)];
  });
};

renderFireballColorUserWizard();
