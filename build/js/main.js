'use strict';

(function () {
  const postList = document.querySelector('.news__list');
  const itemWIdth = postList.querySelector('li:first-child').offsetWidth;
  const dots = document.querySelector('.news__select-list').querySelectorAll('.news__select-item');;
  const dotsList = Array.from(dots);

  console.log(dots);
  console.log(dotsList);

  if (postList) {
    var position = 0;

    const setActiveElement = function (element) {
      const activeElement = document.querySelector('.news__select-item--active');
      console.log(activeElement)
      activeElement.classList.remove('news__select-item--active');
      element.classList.add('news__select-item--active');
    }

    window.addEventListener('resize', function() {
      postList.style.transform = 'translateX(' + 0 + 'px)';
      setActiveElement(dotsList[0]);
    });

    for (const dot of dotsList) {
      dot.addEventListener('click', function (evt) {
        console.log(itemWIdth);
        if (dotsList.findIndex(dot => evt.target === dot) < dotsList.findIndex(dot => dot.classList.contains('news__select-item--active'))) {
          position += itemWIdth*((dotsList.findIndex(dot => dot.classList.contains('news__select-item--active')))-(dotsList.findIndex(dot => evt.target === dot)));
          setActiveElement(dot);
          postList.style.transform = 'translateX(' + position + 'px)';
        } else if (dotsList.findIndex(dot => evt.target === dot) > dotsList.findIndex(dot => dot.classList.contains('news__select-item--active'))) {
          position = position - itemWIdth*((dotsList.findIndex(dot => evt.target === dot)) - (dotsList.findIndex(dot => dot.classList.contains('news__select-item--active'))));
          setActiveElement(dot);
          postList.style.transform = 'translateX(' + position + 'px)';
        }
      });
    }
  }
})();

'use strict';

(function () {
  var navMain = document.querySelector('.main-nav');

  if (navMain) {
    var navToggle = document.querySelector('.main-nav__toggle');

    navMain.classList.remove('main-nav--opened');
    navMain.classList.add('main-nav--closed');

    navToggle.addEventListener('click', function () {
      if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.add('main-nav--opened');
        navMain.classList.remove('main-nav--closed');
      } else {
        navMain.classList.remove('main-nav--opened');
        navMain.classList.add('main-nav--closed');
      }
    });
  }
})();
