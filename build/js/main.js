'use strict';

(function () {
  var modal = document.querySelector('.modal');

  if (modal) {
    var closeButton = modal.querySelector('.modal__title-wrapper button');
    var addToCartButton = document.querySelector('.product-card__description-wrapper a');
    var blackLayer = modal.querySelector('.black-background');
    var bodyPage = document.querySelector('body');
    var checkoutButton = modal.querySelector('.modal__link-wrapper a:nth-child(2n + 2)');

    addToCartButton.href = '#';

    var modalClosing = function (window, back) {
      if (window.classList.contains('modal--opened')) {
        window.classList.remove('modal--opened');
        window.classList.add('modal--closed');
        back.classList.remove('scroll-hidden');
      }
    };

    blackLayer.addEventListener('click', function () {
      modalClosing(modal, bodyPage);
    });

    closeButton.addEventListener('click', function () {
      modalClosing(modal, bodyPage);
    });

    addToCartButton.addEventListener('click', function () {
      if (modal.classList.contains('modal--closed')) {
        modal.classList.remove('modal--closed');
        modal.classList.add('modal--opened');
        bodyPage.classList.add('scroll-hidden');
        closeButton.focus();
      }
    });

    document.addEventListener('keydown', function (evt) {
      if ((evt.key === 'Escape')) {
        modalClosing(modal, bodyPage);
      }
    });

    document.addEventListener('keydown', function (evttab) {
      if ((evttab.key === 'Tab') && (modal.classList.contains('modal--opened')) && (document.activeElement === checkoutButton)) {
        closeButton.focus();
        evttab.preventDefault();
      }
    });
  }
})();

'use strict';

(function () {
  var mainFaq = document.querySelector('.main-faq');

  if (mainFaq) {
    var allFaq = mainFaq.querySelectorAll('.main-faq__faq-wrapper');

    for (var j = 0; j < allFaq.length; j++) {
      allFaq[j].classList.remove('main-faq__faq-wrapper--nojs');
    }

    var faqClosing = function (faqSection) {
      faqSection.classList.remove('main-faq__faq-wrapper--open');
      faqSection.classList.add('main-faq__faq-wrapper--close');
    };

    var openToggle = function (question) {
      question.addEventListener('click', function () {
        var openTab = mainFaq.querySelector('.main-faq__faq-wrapper--open');

        if (question.classList.contains('main-faq__faq-wrapper--close')) {
          question.classList.remove('main-faq__faq-wrapper--close');
          question.classList.add('main-faq__faq-wrapper--open');
        } else {
          faqClosing(question);
        }

        if (openTab) {
          faqClosing(openTab);
        }
      });
    };

    for (var i = 0; i < allFaq.length; i++) {
      openToggle(allFaq[i]);
    }
  }
})();

'use strict';

(function () {
  var catalog = document.querySelector('.catalog-filter');

  if (catalog) {
    var closeButton = catalog.querySelector('.catalog-filter__form-button');
    var filterButton = catalog.querySelector('.catalog-filter__filter-button');

    catalog.classList.remove('catalog-filter--nojs');

    closeButton.addEventListener('click', function () {
      if (catalog.classList.contains('catalog-filter--opened')) {
        catalog.classList.remove('catalog-filter--opened');
        catalog.classList.add('catalog-filter--closed');
      }
    });

    filterButton.addEventListener('click', function () {
      if (catalog.classList.contains('catalog-filter--closed')) {
        catalog.classList.remove('catalog-filter--closed');
        catalog.classList.add('catalog-filter--opened');
      } else {
        catalog.classList.remove('catalog-filter--opened');
        catalog.classList.add('catalog-filter--closed');
      }
    });
  }
})();

'use strict';

(function () {
  var filter = document.querySelector('.catalog-filter');

  if (filter) {
    var form = filter.querySelector('form');
    var filterOptions = form.querySelectorAll('.catalog-filter__wrapper');

    for (var j = 0; j < filterOptions.length; j++) {
      filterOptions[j].classList.remove('catalog-filter__wrapper--nojs');
    }

    var filterToggle = function (filterSection) {

      var filterToggleButton = filterSection.querySelector('legend');
      var filterSliderToggle = filterSection.querySelector('p');
      var filterButton = filterSection.querySelector('button');
      var filterSliderButton = filterSection.querySelector('button');

      if (filterToggleButton) {
        filterToggleButton.addEventListener('click', function () {
          if (filterSection.classList.contains('catalog-filter__wrapper--closed')) {
            filterSection.classList.remove('catalog-filter__wrapper--closed');
            filterSection.classList.add('catalog-filter__wrapper--opened');
          } else {
            filterSection.classList.remove('catalog-filter__wrapper--opened');
            filterSection.classList.add('catalog-filter__wrapper--closed');
          }
        });

        filterButton.addEventListener('click', function () {
          if (filterSection.classList.contains('catalog-filter__wrapper--closed')) {
            filterSection.classList.remove('catalog-filter__wrapper--closed');
            filterSection.classList.add('catalog-filter__wrapper--opened');
          } else {
            filterSection.classList.remove('catalog-filter__wrapper--opened');
            filterSection.classList.add('catalog-filter__wrapper--closed');
          }
        });
      } else {
        filterSliderToggle.addEventListener('click', function () {
          if (filterSection.classList.contains('catalog-filter__wrapper--closed')) {
            filterSection.classList.remove('catalog-filter__wrapper--closed');
            filterSection.classList.add('catalog-filter__wrapper--opened');
          } else {
            filterSection.classList.remove('catalog-filter__wrapper--opened');
            filterSection.classList.add('catalog-filter__wrapper--closed');
          }
        });

        filterSliderButton.addEventListener('click', function () {
          if (filterSection.classList.contains('catalog-filter__wrapper--closed')) {
            filterSection.classList.remove('catalog-filter__wrapper--closed');
            filterSection.classList.add('catalog-filter__wrapper--opened');
          } else {
            filterSection.classList.remove('catalog-filter__wrapper--opened');
            filterSection.classList.add('catalog-filter__wrapper--closed');
          }
        });
      }
    };

    for (var i = 0; i < filterOptions.length; i++) {
      filterToggle(filterOptions[i]);
    }
  }
})();

'use strict';

(function () {
  var login = document.querySelector('.login-modal');

  if (login) {
    var logInButton = document.querySelector('.main-nav__user-item:nth-child(2n + 1) a');
    var closeLoginButton = login.querySelector('.login-modal__close-button-wrapper button');
    var whiteLayer = login.querySelector('.login-modal__white-layer');
    var mailInput = login.querySelector('input[name=E-mail]');
    var bodyTag = document.querySelector('body');

    logInButton.href = '#';

    login.addEventListener('submit', function () {
      localStorage.setItem('Mail', mailInput.value);
    });

    var loginClosing = function (registration, ground) {
      if (registration.classList.contains('login-modal--opened')) {
        registration.classList.remove('login-modal--opened');
        registration.classList.add('login-modal--closed');
        ground.classList.remove('scroll-hidden');
      }
    };

    whiteLayer.addEventListener('click', function () {
      loginClosing(login, bodyTag);
    });

    logInButton.addEventListener('click', function () {
      if (login.classList.contains('login-modal--closed')) {
        login.classList.remove('login-modal--closed');
        login.classList.add('login-modal--opened');
        bodyTag.classList.add('scroll-hidden');
        mailInput.focus();
      }
    });

    closeLoginButton.addEventListener('click', function () {
      loginClosing(login, bodyTag);
    });

    document.addEventListener('keydown', function (evt) {
      if ((evt.key === 'Escape')) {
        loginClosing(login, bodyTag);
      }
    });

    document.addEventListener('keydown', function (evttab) {
      if ((evttab.key === 'Tab') && (login.classList.contains('login-modal--opened')) && (document.activeElement === closeLoginButton)) {
        mailInput.focus();
        evttab.preventDefault();
      }
    });

    document.addEventListener('keydown', function (evtshift) {
      if ((evtshift.shiftKey && evtshift.key === 'Tab') && (login.classList.contains('login-modal--opened')) && (document.activeElement === mailInput)) {
        closeLoginButton.focus();
        evtshift.preventDefault();
      }
    });
  }
})();

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
