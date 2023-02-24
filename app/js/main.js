window.addEventListener('DOMContentLoaded', () => {
  // * ===== Mask input
  $('input[type="tel"]').mask('+7 (999) 999-99-99');
  // * ===== Nice Select
  $('select').niceSelect();

  // * ===== Scroll anchor
  $(document).ready(function () {
    $('a[href*="#"]').bind('click', function (e) {
      var anchor = $(this);
      $('html, body').animate({
        scrollTop: $(anchor.attr('href')).offset().top - 90,
      });
      e.preventDefault();
    });
    return false;
  });

  // * ===== Scroll
  function fixedNav() {
    const el = document.querySelectorAll('.gates-nav');
    el.forEach((item) => {
      const distance =
        item.offsetTop - document.body.offsetTop - item.offsetHeight;

      console.log('distance: ', distance);
      console.log('pageYOffset: ', window.pageYOffset);
      console.log(document.querySelector('.gates__list').clientHeight);

      if (window.pageYOffset > distance) {
        item.classList.add('active');
        console.log('aa');
      }
      if (window.pageYOffset <= 550) {
        item.classList.remove('active');
        console.log('aa');
      }

      if (
        window.pageYOffset >=
        document.querySelector('.gates__list').clientHeight + 550 * 2
      ) {
        item.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', fixedNav);

  (function ScrollSection() {
    //* Scroll Section Active Link *//
    const sections = document.querySelectorAll('.anchor-card[id]');

    function scrollActive() {
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 90;
        sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector('.gates-nav__list a[href*=' + sectionId + ']')
            .classList.add('active');
        } else {
          document
            .querySelector('.gates-nav__list a[href*=' + sectionId + ']')
            .classList.remove('active');
        }
      });
    }
    window.addEventListener('scroll', scrollActive);
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.discount__slider');
    new Swiper(sliderEl, {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      slidesPerView: 1,
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.cooperation__slider');
    new Swiper(sliderEl, {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      slidesPerView: 1,
      navigation: {
        nextEl: '.cooperation__slider .swiper-button-next',
        prevEl: '.cooperation__slider .swiper-button-prev',
      },
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.hero__slider');
    new Swiper(sliderEl, {
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      slidesPerView: 1,
      navigation: {
        nextEl: '.hero__slider .swiper-button-next',
        prevEl: '.hero__slider .swiper-button-prev',
      },
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelectorAll('.gates-card__slider');
    sliderEl.forEach((el) => {
      new Swiper(el, {
        slidesPerView: 1,
        navigation: {
          nextEl: '.gates-card__slider .swiper-button-next',
          prevEl: '.gates-card__slider .swiper-button-prev',
        },
      });
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelectorAll('.automatic-gates-card__slider');
    sliderEl.forEach((el) => {
      new Swiper(el, {
        slidesPerView: 1,
        navigation: {
          nextEl: '.automatic-gates-card__slider .swiper-button-next',
          prevEl: '.automatic-gates-card__slider .swiper-button-prev',
        },
      });
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelectorAll('.solutions__slider');
    sliderEl.forEach((el) => {
      new Swiper(el, {
        slidesPerView: 'auto',
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
        },
        navigation: {
          nextEl: '.solutions__slider .swiper-button-next',
          prevEl: '.solutions__slider .swiper-button-prev',
        },
        breakpoints: {
          315: {
            spaceBetween: 20,
          },
          991: {
            spaceBetween: 30,
          },
        },
      });
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelectorAll('.stock-slider__slider');
    sliderEl.forEach((el) => {
      new Swiper(el, {
        slidesPerView: 'auto',
        spaceBetween: 30,
        navigation: {
          nextEl: '.stock-slider__slider .swiper-button-next',
          prevEl: '.stock-slider__slider .swiper-button-prev',
        },
        breakpoints: {
          315: {
            spaceBetween: 20,
          },
          991: {
            spaceBetween: 30,
          },
        },
      });
    });
  })();

  // * ===== Slider Thumbs
  (function verticalSlider() {
    const sliderWrap = document.querySelectorAll('.slider-thumbs');
    sliderWrap.forEach((el) => {
      if (el) {
        const sliderNav = el.querySelector('.slider-thumbs__nav-wrap');
        const sliderMain = el.querySelector('.slider-thumbs__main');

        console.log(sliderNav);

        let mySwiperNav = new Swiper(sliderNav, {
          slidesPerView: 'auto',
          spaceBetween: 17,
          direction: 'horizontal',
          watchSlidesVisibility: true,
          watchSlidesProgress: true,
        });

        new Swiper(sliderMain, {
          loopedSlides: 4,
          thumbs: {
            swiper: mySwiperNav,
          },
        });
      }
    });
  })();
  //   // * ===== Fixed Header
  //   (function fixedHeader() {
  //     function scrollHeader() {
  //       const nav = document.querySelector('header');
  //       if (this.scrollY >= 90) {
  //         nav.classList.add('scroll-header');
  //       } else {
  //         nav.classList.remove('scroll-header');
  //       }
  //     }
  //     window.addEventListener('scroll', scrollHeader);
  //     // ! Change
  //     function changeBg() {
  //       const header = document.querySelector('header');
  //       if (window.pageYOffset >= 90) {
  //         header.classList.add('scroll-header');
  //       }
  //     }
  //     changeBg();
  //   })();

  // * ===== Show Menu
  (function showMenu() {
    const menuBtn = document.querySelector('.header__toggle');
    const menu = document.querySelector('.mobile-menu');
    // const body = document.querySelector('body');

    menuBtn.addEventListener('click', (e) => {
      menu.classList.toggle('active');
      menuBtn.classList.toggle('active');
      // body.classList.toggle('no-scroll');
    });
  })();

  //   // * ===== Modal
  //   (function modals() {
  //     function bindModal(openBtn, modal, close) {
  //       const openBtnEl = document.querySelectorAll(openBtn);
  //       const modalEl = document.querySelector(modal);
  //       const closeEl = document.querySelectorAll(close);
  //       const body = document.querySelector('body');
  //       if (modalEl) {
  //         openBtnEl.forEach((el) => {
  //           el.addEventListener('click', (e) => {
  //             if (e.target) {
  //               e.preventDefault();
  //             }
  //             modalEl.classList.add('active');
  //             body.classList.add('no-scroll');
  //           });
  //         });
  //         closeEl.forEach((btn) => {
  //           btn.addEventListener('click', (e) => {
  //             modalEl.classList.remove('active');
  //             body.classList.remove('no-scroll');
  //           });
  //         });
  //         modalEl.addEventListener('click', (e) => {
  //           if (e.target === modalEl) {
  //             modalEl.classList.remove('active');
  //             body.classList.remove('no-scroll');
  //           }
  //         });
  //       }
  //     }
  //     bindModal('.online-booking-btn', '.popup--online-booking', '.popup__close');
  //   })();

  // * ===== Toggle Tabs
  function someTabs(headerSelector, tabSelector, contentSelector, activeClass) {
    const header = document.querySelectorAll(headerSelector);
    const tab = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector);
    header.forEach((el) => {
      if (el) {
        hideTabContent();
        showTabContent();
        function hideTabContent() {
          content.forEach((item) => {
            item.classList.remove('active');
          });
          tab.forEach((item) => {
            item.classList.remove(activeClass);
          });
        }
        function showTabContent(i = 0) {
          content[i].classList.add('active');
          tab[i].classList.add(activeClass);
        }
        header.forEach((item) => {
          if (item) {
            item.addEventListener('click', (e) => {
              const target = e.target;
              if (target.classList.contains(tabSelector.replace(/\./, ''))) {
                tab.forEach((item, i) => {
                  if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                  }
                });
              }
            });
          }
        });
      }
    });
  }
  someTabs(
    '.slider-tabs',
    '.slider-tabs-btn',
    '.slider-tabs-content',
    'active'
  );
  someTabs(
    '.product-tabs',
    '.product-tabs__btn',
    '.product-tabs__content',
    'active'
  );
  someTabs('.descr-tabs', '.descr-tabs-btn', '.descr-tabs-content', 'active');
});
