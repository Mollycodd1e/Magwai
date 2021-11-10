'use strict';

(function () {
  //const URLGET = 'https://jsonplaceholder.typicode.com/posts';
  const card = document.querySelector('.card');

  if (card) {
    const loadButton = card.querySelector('.card__button a');
    const cardList = card.querySelector('ul');

    //const load = function() {
    //  let xhr = new XMLHttpRequest();
    //  xhr.open("GET", URLGET);
    //  xhr.onload = function (){
    //    localStorage.setItem("Data", xhr.responseText);
    //  }
    //  xhr.send(null);
    //}

    //console.log(ff);

    const addCard = function(template) {
      const lol = document.createElement('li');
      lol.innerHTML = `<a href="#">
                        <img src="img/nature2.png" width="320" height="185" alt="Bridge">
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
      fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => response.json())
        .then((json) => {
          json.slice(0,5).map((item) => addCard(item))
        });
      //const gg = localStorage.getItem("Data");
      //console.log(gg[0])
      //if (gg.length > 0) {
      //  //gg.slice(0,5).map(item => {
      //  //  console.log(item)
      //  //})
      //  //console.log(gg)
      //  //for (let i = 0 ; i <=5; i++) {
      //  //  console.log(loadedData[i].userId);
      //    addCard(gg[i]);
      //  //  console.log(gg[i])
      //  //}
      //}
    })
  }
})();
