import {
  Swiper, Parallax, Mousewheel, Controller, Pagination, Navigation, Autoplay, EffectFade,
} from 'swiper';
import {
  gsap, Power2, Sine,
} from 'gsap/all';
import scrollUp from './toUp';

Swiper.use([Parallax, Mousewheel, Controller, Pagination, Navigation, Autoplay, EffectFade]);

document.addEventListener('DOMContentLoaded', () => {
  console.log('Ahoj JS');

  const iconMenu = document.querySelector('.hamburger');
  const subMenu = document.querySelector('.header-submenu');

  const tlOpenMenu = gsap.timeline({ defaults: { repeat: 0 } });

  tlOpenMenu
    .to(subMenu, 0.4, {
      autoAlpha: 1,
    }, 0)
    .staggerTo('.header-submenu-navigation li', 0.4, { opacity: 1, x: 0, ease: Sine.easeOut }, 0.2, 0.5)
    .reverse();

  iconMenu.addEventListener('click', () => {
    tlOpenMenu.reversed(!tlOpenMenu.reversed());
    iconMenu.classList.toggle('active');
  });

  const sliderImg = new Swiper('.header-slider__img', {
    loop: false,
    speed: 1000,
    parallax: true,
    mousewheel: false,
  });

  const sliderText = new Swiper('.header-slider__text', {
    loop: false,
    speed: 1000,
    parallax: true,
    preventClicks: false,
    preventClicksPropagation: false,
    // watchSlidesProgress: true,
    // mousewheel: false,
    mousewheel: {
      invert: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  sliderImg.controller.control = sliderText;
  sliderText.controller.control = sliderImg;

  const headerText = gsap.timeline({ defaults: { repeat: 0 } });

  headerText
    .from('.header-slider__title', 0.4, {
      y: -100,
      opacity: 0,
      ease: Power2.easeOut,
    }, '+=0.5')
    .from('.header-slider__sub-decoration', 0.6, {
      opacity: 0,
      x: -500,
      skewY: 0,
      ease: Power2.easeOut,
    })
    .from('.header-slider__sub-title', 0.3, {
      scale: 0.5,
      opacity: 0,
      ease: Power2.easeOut,
    })
    .staggerFrom('.header-slider__stars .icon-star', 0.6, {
      opacity: 0,
      y: 100,
      ease: Sine.easeIn,
    }, 0.1, 0.1)
    .from('.header-slider__sub-decoration-s', 0.4, {
      opacity: 0,
      x: -200,
      transformOrigin: 'center',
      rotation: 1440,
      ease: Power2.easeOut,
    }, '-=0.4')
    .from('.header-slider__sub-info', 0.4, {
      opacity: 0,
      x: -50,
      ease: Power2.easeOut,
    }, '-=0.2');

  sliderText.on('slideChange', () => {
    headerText.restart();
    headerText.play();
  });
});

scrollUp();
