'use strict';

window.renderStatistics = function (ctx, names, times) {
  var step;

  var initialX = 170;
  var initialY = 250;
  var distanceBetweenColumns = 50;
  var maxTime = 0;
  var histagrammHeight = 150;
  var widthColumns = 40;

  var addTextInCanvas = function (text, x, y, colorText) {
    ctx.fillStyle = colorText;
    ctx.fillText(text, x, y);
  };

  var addRectInCanvas = function (x, y, widthRect, heightRect, colorRect) {
    ctx.fillStyle = colorRect;
    ctx.fillRect(x, y, widthRect, heightRect);
  };

  var bazierInCanvas = function (x, y, colorBg) {
    ctx.beginPath();
    ctx.fillStyle = colorBg;
    ctx.moveTo(89 + x, 452 + y);
    ctx.bezierCurveTo(89 + x, 452 + y, 340 + x, 455 + y, 468 + x, 453 + y);
    ctx.bezierCurveTo(504 + x, 452 + y, 587 + x, 459 + y, 583 + x, 354 + y);
    ctx.bezierCurveTo(581 + x, 288 + y, 555 + x, 329 + y, 519 + x, 273 + y);
    ctx.bezierCurveTo(402 + x, 89 + y, -33 + x, 214 + y, 62 + x, 233 + y);
    ctx.bezierCurveTo(184 + x, 258 + y, 98 + x, 292 + y, 58 + x, 306 + y);
    ctx.bezierCurveTo(-24 + x, 335 + y, 89 + x, 451 + y, 88 + x, 451 + y);
    ctx.stroke();
    ctx.fill();
  };
  bazierInCanvas(30, -160, 'rgba(0, 0, 0, 0.7)');
  bazierInCanvas(20, -170, '#ffffff');

  ctx.font = '16px PT Mono';

  addTextInCanvas('Ура вы победили!', 240, 40, 'green');
  addTextInCanvas('Список результатов:', 230, 60, 'grey');

  var getMaxNumber = function (arr) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxTime) {
        maxTime = arr[i];
      }
    }
  };
  getMaxNumber(times);

  step = histagrammHeight / maxTime;

  addRectInCanvas(initialX, initialY - (step * times), widthColumns, step * times);

  var getRandomNumber = function () {
    return Math.floor(Math.random() * (1 - 0.1 + 1)) + 0.1;
  };

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = (names[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 20, 160,' + getRandomNumber() + ')';

    addRectInCanvas(initialX += distanceBetweenColumns, initialY - (step * times[i]), widthColumns, step * times[i]);
    addTextInCanvas(names[i], initialX, histagrammHeight + 120, 'grey');
    addTextInCanvas(times[i].toFixed(0), initialX, histagrammHeight - (step * times[i]) + 90, 'grey');
  }
};
