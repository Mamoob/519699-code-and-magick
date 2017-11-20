'use strict';

window.renderStatistics = function (ctx, names, times) {
  var distanceBetweenColumns;
  var step;
  var initialX;

  var initialY = 250;
  var maxTime = 0;
  var maxIndex = 0;
  var histagrammHeight = 120;
  var widthColumns = 40;
  var modalWindowWidth = 420;
  var modalWindowHeight = 270;

  var addTextInCanvas = function (text, x, y, colorText) {
    ctx.fillStyle = colorText;
    ctx.fillText(text, x, y);
  };

  var addRectInCanvas = function (x, y, widthRect, heightRect, colorRect) {
    ctx.fillStyle = colorRect;
    ctx.fillRect(x, y, widthRect, heightRect);
  };

  addRectInCanvas(120, 20, modalWindowWidth, modalWindowHeight, 'rgba(0, 0, 0, 0.7)');
  addRectInCanvas(110, 10, modalWindowWidth, modalWindowHeight, '#f2f2f2');
  ctx.strokeRect(110, 10, modalWindowWidth, modalWindowHeight);
  ctx.font = '16px PT Mono';
  addTextInCanvas('Ура вы победили!', 240, 40, 'green');
  addTextInCanvas('Список результатов:', 230, 60, 'grey');

  var getMaxNumber = function (arr) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxTime) {
        maxTime = arr[i];
        maxIndex = i;
      }
    }
  };
  getMaxNumber(times);

  step = histagrammHeight / maxTime;
  distanceBetweenColumns = modalWindowWidth / names.length;
  initialX = (distanceBetweenColumns / 2) - (widthColumns / 2);

  addTextInCanvas('Худшее время ' + maxTime.toFixed(2) + ' мс у игрока ' + names[maxIndex], 150, 90, 'red');
  addRectInCanvas(initialX, initialY - (step * times[i]), widthColumns, step * times[i]);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = (names[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 20, 160,' + Math.ceil(Math.random() * 10) / 10 + ')';
    addRectInCanvas(initialX += distanceBetweenColumns, initialY - (step * times[i]), widthColumns, step * times[i]);
    ctx.fillStyle = 'grey';
    addTextInCanvas(names[i], initialX, histagrammHeight + 150, 'grey');
    addTextInCanvas(times[i].toFixed(2), initialX, histagrammHeight - (step * times[i]) + 120, 'grey');
  }
};
