'use strict';

(function () {
  var slider = document.querySelector('.main-new');

  if (slider) {
    var position = 0;
    var slidesToShow = 4;
    var slidesToScroll = 4;
    var previousButton = slider.querySelector('.main-new__back-button-wrapper button');
    var nextButton = slider.querySelector('.main-new__forward-button-wrapper button');
    var sliderList = slider.querySelector('.main-new__product-list');
    var sliderContainer = slider.querySelector('.main-new__product-list-wrapper');
    var sliderItems = slider.querySelectorAll('.main-new__product-item');
    var itemsCount = sliderItems.length;
    var itemWidth = sliderContainer.clientWidth / slidesToShow;
    var movePosition = slidesToScroll * itemWidth;
    var margin = 0;

    if (window.innerWidth < 1024) {
      slidesToShow = 2;
      slidesToScroll = 2;
      var marginRigth = margin + 15;
      itemWidth = sliderContainer.clientWidth / slidesToScroll;
    } else {
      slidesToShow = 4;
      slidesToScroll = 4;
      marginRigth = margin;
      itemWidth = sliderContainer.clientWidth / slidesToScroll;
    }

    previousButton.addEventListener('click', function () {

      position += (movePosition + marginRigth);

      slidingList();
      checkButtons();
    });

    nextButton.addEventListener('click', function () {

      position -= (movePosition + marginRigth);

      slidingList();
      checkButtons();
    });

    var slidingList = function () {
      sliderList.style.transform = 'translateX(' + position + 'px)';
    };

    var checkButtons = function () {
      if (position === 0) {
        previousButton.setAttribute('disabled', 'disabled');
      } else {
        previousButton.removeAttribute('disabled', 'disabled');
      }

      if (position <= -(itemsCount - slidesToShow) * itemWidth) {
        nextButton.setAttribute('disabled', 'disabled');
      } else {
        nextButton.removeAttribute('disabled', 'disabled');
      }
    };

    checkButtons();
  }
})();
