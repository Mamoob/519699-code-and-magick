'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var setup = document.querySelector('.setup');
var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarItems = document.querySelector('.setup-similar');
var similarPlayer = document.querySelector('.setup-similar-list');
var fragment = document.createDocumentFragment();

setup.classList.remove('hidden');
similarItems.classList.remove('hidden');

var randomSplice = function (arr) {
  return arr.splice(Math.round(Math.random() * arr.length - 1), 1);
};

var wizards = [{
  name: randomSplice(NAMES),
  surname: randomSplice(SURNAMES),
  coatColor: randomSplice(COAT_COLORS),
  eyesColor: randomSplice(EYES_COLORS)
},
{
  name: randomSplice(NAMES),
  surname: randomSplice(SURNAMES),
  coatColor: randomSplice(COAT_COLORS),
  eyesColor: randomSplice(EYES_COLORS)
},
{
  name: randomSplice(NAMES),
  surname: randomSplice(SURNAMES),
  coatColor: randomSplice(COAT_COLORS),
  eyesColor: randomSplice(EYES_COLORS)
},
{
  name: randomSplice(NAMES),
  surname: randomSplice(SURNAMES),
  coatColor: randomSplice(COAT_COLORS),
  eyesColor: randomSplice(EYES_COLORS)
}
];

var renderWizard = function (wizard) {
  var wizardElement = wizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.surname;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarPlayer.appendChild(fragment);
