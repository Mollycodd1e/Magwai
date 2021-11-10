'use strict';

(function () {
  const newsList = document.querySelector('.news__list');
  const itemWIdth = newsList.querySelector('li:first-child').offsetWidth;
  const newsTitle = document.querySelector('.news__select-list').querySelectorAll('.news__select-item');;
  const newsTitleList = Array.from(newsTitle);

  if (newsList) {
    let position = 0;

    const setActiveElement = function (element) {
      const activeElement = document.querySelector('.news__select-item--active');
      activeElement.classList.remove('news__select-item--active');
      element.classList.add('news__select-item--active');
    }

    window.addEventListener('resize', function() {
      newsList.style.transform = 'translateX(' + 0 + 'px)';
      setActiveElement(newsTitleList[0]);
    });

    for (const dot of newsTitleList) {
      dot.addEventListener('click', function (evt) {
        console.log(itemWIdth);
        if (newsTitleList.findIndex(dot => evt.target === dot) < newsTitleList.findIndex(dot => dot.classList.contains('news__select-item--active'))) {
          position += itemWIdth*((newsTitleList.findIndex(dot => dot.classList.contains('news__select-item--active')))-(newsTitleList.findIndex(dot => evt.target === dot)));
          setActiveElement(dot);
          newsList.style.transform = 'translateX(' + position + 'px)';
        } else if (newsTitleList.findIndex(dot => evt.target === dot) > newsTitleList.findIndex(dot => dot.classList.contains('news__select-item--active'))) {
          position = position - itemWIdth*((newsTitleList.findIndex(dot => evt.target === dot)) - (newsTitleList.findIndex(dot => dot.classList.contains('news__select-item--active'))));
          setActiveElement(dot);
          newsList.style.transform = 'translateX(' + position + 'px)';
        }
      });
    }
  }
})();
