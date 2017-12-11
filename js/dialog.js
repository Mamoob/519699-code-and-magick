'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var setupUserName = setup.querySelector('.setup-user-name');

  var onPopupEscPress = function (evt) {
    window.utill.isEscEvent(evt, closePopup);
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
    window.utill.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.utill.isEnterEvent(evt, closePopup);
  });

  document.addEventListener('keydown', onPopupEscPress);

  setupUserName.addEventListener('focus', function () {
    document.removeEventListener('keydown', onPopupEscPress);
  });

  setupUserName.addEventListener('blur', function () {
    document.addEventListener('keydown', onPopupEscPress);
  });

  // ПЕРЕТАСКИВАНИЕ

  (function () {
    // var dialogHandle = setup.querySelector('.setup-user-pic');
    var upload = setup.querySelector('.upload');
    var shopElement = document.querySelector('.setup-artifacts-shop');
    var artifactsElement = document.querySelector('.setup-artifacts');
    var draggedItem = null;

    upload.addEventListener('mousedown', function (evt) {
      evt.preventDefault();

      var startCoords = {
        x: evt.clientX,
        y: evt.clientY
      };

      var onMouseMove = function (moveEvt) {
        moveEvt.preventDefault();

        var shift = {
          x: startCoords.x - moveEvt.clientX,
          y: startCoords.y - moveEvt.clientY
        };

        startCoords = {
          x: moveEvt.clientX,
          y: moveEvt.clientY
        };

        window.move = {
          x: shift.x,
          y: shift.y
        };

        setup.style.top = (setup.offsetTop - shift.y) + 'px';
        setup.style.left = (setup.offsetLeft - shift.x) + 'px';
      };

      var onMouseUp = function (upEvt) {
        upEvt.preventDefault();

        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);

      setup.style.top = (setup.offsetTop + window.move.y) + 'px';
      setup.style.left = (setup.offsetLeft + window.move.x) + 'px';
    });

    shopElement.addEventListener('dragstart', function (evt) {
      if (evt.target.tagName === 'IMG') {
        draggedItem = evt.target.cloneNode(true);
      }
    });

    artifactsElement.addEventListener('dragover', function (evt) {
      evt.preventDefault();
      return false;
    });

    artifactsElement.addEventListener('drop', function (evt) {
      evt.target.style.background = '';
      evt.target.style.borderStyle = '';
      evt.target.style.borderColor = '';
      evt.target.style.borderWidth = '';

      [].slice.call(artifactsElement.children);

      if (artifactsElement.children.indexOf(draggedItem) <= 0) {
        evt.target.appendChild(draggedItem);
        evt.preventDefault();

      } else {
        evt.target.appendChild(null);
      }
    });

    artifactsElement.addEventListener('dragenter', function (evt) {
      evt.target.style.background = 'yellow';
      evt.target.style.borderStyle = 'dashed';
      evt.target.style.borderColor = 'red';
      evt.target.style.borderWidth = '2px';
      evt.preventDefault();
    });

    artifactsElement.addEventListener('dragleave', function (evt) {
      evt.target.style.background = '';
      evt.target.style.borderStyle = '';
      evt.target.style.borderColor = '';
      evt.target.style.borderWidth = '';
      evt.preventDefault();
    });
  })();
})();
