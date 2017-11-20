'use strict';

window.renderStatistics = function (ctx, names, times) {
  var maxTime = 0;
  var maxIndex = 0;
  var histagrammHeight = 120;
  var initialX;
  var initialY = 250;
  var widthColumns = 40;
  var distanceBetweenColumns;
  var step;
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(120, 20, 420, 270);
  ctx.fillStyle = '#f2f2f2';
  ctx.fillRect(110, 10, 420, 270);
  ctx.strokeRect(110, 10, 420, 270);
  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'green';
  ctx.fillText('Ура вы победили!', 240, 40);
  ctx.fillStyle = 'grey';
  ctx.font = '16px PT Mono';
  ctx.fillText('Список результатов:', 230, 60);
  for (var i = 0; i < times.length; i++) {
    if (times[i] > maxTime) {
      maxTime = times[i];
      maxIndex = i;
    }
  }
  step = histagrammHeight / maxTime;
  distanceBetweenColumns = 420 / names.length;
  initialX = (distanceBetweenColumns / 2) - (widthColumns / 2);
  ctx.fillStyle = 'red';
  ctx.fillText('Худшее время ' + maxTime.toFixed(2) + ' мс у игрока ' + names[maxIndex], 150, 90);
  ctx.fillRect(initialX, initialY - (step * times[i]), widthColumns, step * times[i]);
  for (i = 0; i < names.length; i++) {
    ctx.fillStyle = (names[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 20, 160,' + Math.random() * (1 - 0.2) + ')';
    ctx.fillRect(initialX += distanceBetweenColumns, initialY - (step * times[i]), widthColumns, step * times[i]);
    ctx.fillStyle = 'grey';
    ctx.fillText(names[i], initialX, histagrammHeight + 150);
    ctx.fillText(times[i].toFixed(2), initialX, histagrammHeight - (step * times[i]) + 120);
  }
};
