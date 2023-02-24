window.addEventListener('DOMContentLoaded', () => {
  (function loadForm() {
    let inputs = document.querySelectorAll('.input-file-upload');
    Array.prototype.forEach.call(inputs, function (input) {
      let label = input.previousElementSibling,
        labelVal = label.querySelector('.custom-file-upload span').innerText;

      input.addEventListener('change', function (e) {
        let countFiles = '';
        if (this.files && this.files.length >= 1)
          countFiles = this.files.length;

        if (countFiles)
          label.querySelector('.custom-file-upload span').innerText =
            'Выбрано файлов: ' + countFiles;
        else
          label.querySelector('.custom-file-upload span').innerText = labelVal;
      });
    });
  })();

  // * ==== Active Class
  function activeClass(handler, activeClass) {
    const handlerEl = document.querySelectorAll(handler);
    const ACTIVE_CLASS = activeClass;

    function removeActive() {
      handlerEl.forEach((item) => {
        item.classList.remove(ACTIVE_CLASS);
        // console.log(item)
      });
    }

    handlerEl.forEach((item) => {
      item.addEventListener('click', (e) => {
        removeActive();
        item.classList.add(ACTIVE_CLASS);
      });
    });
  }

  activeClass('.colors__item', 'active');

  // * ===== Mask input
  $('input[type="tel"]').mask('+7 (999) 999-99-99');
  $('.input-time').mask('99:99');

  // * ===== Nice Select
  $('select').niceSelect();

  // * ===== Scroll anchor
  $(document).ready(function () {
    $('.anchor-link[href*="#"]').bind('click', function (e) {
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

      // console.log('distance: ', distance);
      // console.log('pageYOffset: ', window.pageYOffset);
      // console.log(document.querySelector('.gates__list').clientHeight);

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

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelectorAll('.projects-tabs__slider');
    sliderEl.forEach((el) => {
      new Swiper(el, {
        slidesPerView: 'auto',
        spaceBetween: 30,
        navigation: {
          nextEl: '.projects-tabs__arrows .swiper-button-next',
          prevEl: '.projects-tabs__arrows .swiper-button-prev',
        },
      });
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelectorAll('.projects__slider');
    sliderEl.forEach((el) => {
      new Swiper(el, {
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
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

  // * ===== Search
  (function showMenu() {
    const menuBtn = document.querySelectorAll('.search-block');
    const menu = document.querySelectorAll('.search-block__input');
    const close = document.querySelectorAll('.search-block__close');
    menuBtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        menu.forEach((el) => {
          el.classList.toggle('active');
        });
        btn.classList.toggle('active');
      });
      close.forEach((el) => {
        el.addEventListener('click', (e) => {
          menu.forEach((el) => {
            el.classList.remove('active');
          });
          btn.classList.remove('active');
        });
      });
    });
  })();

  // * ===== Show Menu
  (function showMenu() {
    const menuBtn = document.querySelectorAll('.header__toggle');
    const menu = document.querySelector('.mobile-menu');
    menuBtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        menu.classList.toggle('active');
        btn.classList.toggle('active');
      });
    });
  })();

  // * ===== Accordion
  const toggleAccordion = (accordionControl, accordionContent, accordion) => {
    const filters = document.querySelectorAll(accordionControl);
    filters.forEach((el) => {
      if (el) {
        el.addEventListener('click', (e) => {
          const target = e.target.closest(accordion);
          const content = target.querySelector(accordionContent);
          target.classList.toggle('active');
          if (target.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
          } else {
            content.style.maxHeight = null;
          }
        });
      }
    });
  };
  toggleAccordion('.accordion-control-btn', '.accordion-content', '.accordion');

    // * ===== Modal
    (function modals() {
      function bindModal(openBtn, modal, close) {
        const openBtnEl = document.querySelectorAll(openBtn);
        const modalEl = document.querySelector(modal);
        const closeEl = document.querySelectorAll(close);
        const body = document.querySelector('body');
        if (modalEl) {
          openBtnEl.forEach((el) => {
            el.addEventListener('click', (e) => {
              if (e.target) {
                e.preventDefault();
              }
              modalEl.classList.add('active');
              body.classList.add('no-scroll');
            });
          });
          closeEl.forEach((btn) => {
            btn.addEventListener('click', (e) => {
              modalEl.classList.remove('active');
              body.classList.remove('no-scroll');
            });
          });
          modalEl.addEventListener('click', (e) => {
            if (e.target === modalEl) {
              modalEl.classList.remove('active');
              body.classList.remove('no-scroll');
            }
          });
        }
      }
      bindModal('.back-call-btn', '.popup--back-call', '.popup__close');
      bindModal('.call-btn', '.popup--call', '.popup__close');
      bindModal('.write-btn', '.popup--write', '.popup__close');
    })();

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
  someTabs(
    '.projects-tabs',
    '.projects-tabs__btn',
    '.projects-tabs__content',
    'active'
  );
  someTabs(
    '.palette-tabs',
    '.palette-tabs__btn',
    '.palette-tabs__content',
    'active'
  );
});
