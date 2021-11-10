const createCardTemplate = (card) => {

  return `<a href="#">
              <img src="img/nature2.png" width="320" height="185" alt="Bridge">
              <div class="card__desription-wrapper">
                <h3>${card.title}</h3>
                <p>How to increase your productivity with a Music</p>
                <span>${card.body}</span>
                <div class="card__author-wrapper">
                  <p>
                    Posted by <span>${card.userId}</span>, on <time datetime="2019-07-24">July  24, 2019</time>
                  </p>
                </div>
                <div class="card__continue-button">
                  Continue reading
                </div>
              </div>
            </a>`
};

class Card {
  constructor(card) {
    this._card = card;
  }

  getTemplate() {
    return createCardTemplate(this._card);
  }
}
