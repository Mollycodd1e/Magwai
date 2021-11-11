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
