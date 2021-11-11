//const createCardTemplate = (card) => {
//
//  return `<a href="#">
//              <img src="img/nature2.png" width="320" height="185" alt="Bridge">
//              <div class="card__desription-wrapper">
//                <h3>${card.title}</h3>
//                <p>How to increase your productivity with a Music</p>
//                <span>${card.body}</span>
//                <div class="card__author-wrapper">
//                  <p>
//                    Posted by <span>${card.userId}</span>, on <time datetime="2019-07-24">July  24, 2019</time>
//                  </p>
//                </div>
//                <div class="card__continue-button">
//                  Continue reading
//                </div>
//              </div>
//            </a>`
//};
//
//class Card {
//  constructor(card) {
//    this._card = card;
//  }
//
//  getTemplate() {
//    return createCardTemplate(this._card);
//  }
//}
//

'use strict';

(function () {
  const URLGET = 'https://jsonplaceholder.typicode.com/posts';
  const card = document.querySelector('.card');

  if (card) {
    const loadButton = card.querySelector('.card__button a');
    const cardList = card.querySelector('ul');

    const generateNumber = (a = 1, b = 3) => {
      const lower = Math.ceil(a);
      const upper = Math.floor(b);

      return Math.floor(Math.random() * (upper - lower  + 1)) + lower;
    };

    const addCard = function(template) {
      const lol = document.createElement('li');
      lol.innerHTML = `<a href="#">
                        <img src="img/nature${generateNumber()}.png" width="320" height="185" alt="${template.title}">
                        <div class="card__desription-wrapper">
                          <h3>${template.title}</h3>
                          <p>How to increase your productivity with a Music</p>
                          <span>${template.body}</span>
                          <div class="card__author-wrapper">
                            <p>
                              Posted by <span>${template.userId}</span>, on <time datetime="2019-07-24">July  24, 2019</time>
                            </p>
                          </div>
                          <div class="card__continue-button">
                            Continue reading
                          </div>
                        </div>
                       </a>`;
      cardList.appendChild(lol);
    }

    loadButton.addEventListener('click', function() {
      fetch(URLGET)
        .then((response) => response.json())
        .then((json) => {
          json.slice(0,6).map((item) => addCard(item))
        });
    })
  }
})();

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

'use strict';

(function () {
  const navMain = document.querySelector('.main-nav');

  if (navMain) {
    const navToggle = document.querySelector('.main-nav__toggle');

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
