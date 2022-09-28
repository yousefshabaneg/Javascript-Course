'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const nav = document.querySelector('.nav');

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//Implement Scroll To

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());
  //e.target == the object btnScrollTo
  //
  console.log('Current (X,Y): ', window.pageXOffset, window.pageYOffset);

  console.log(
    'height/width viewport: ',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  //Old SChool
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  //Modern Way.
  section1.scrollIntoView({ behavior: 'smooth' });
});

//Page Navigation

//this way impact the performance because if we have 10.000 element , there is will be a 10.000 copies of the same function then in this situation we need { Event Delegation}

// document.querySelectorAll('.nav__link').forEach((link, i) =>
//   link.addEventListener('click', function (e) {
//     e.preventDefault();
//     const section = this.getAttribute('href');
//     document.querySelector(section).scrollIntoView({ behavior: 'smooth' });
//   })
// );

//* EVENT DELEGATION
//1 . ADD event listener to common parent element
//2 . Determine What element fire the event.

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const section = e.target.getAttribute('href');
    document.querySelector(section).scrollIntoView({ behavior: 'smooth' });
  }
});

//* Tapped Component

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  if (!clicked) return;

  tabs.forEach(el => el.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  clicked.classList.add('operations__tab--active');

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//* Menu Fade Animation
//mouseover is the same with mouseenter but over allow bubble.

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

//sticky navigation

//* BAD FOR PERFORMANCE
// const initialCoords = section1.getBoundingClientRect();
// window.addEventListener('scroll', function (e) {
//   console.log(window.scrollY);

//   if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

//* IntersectionObserver
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null,//null means the viewport
//   threshold: [0, 0.2], //هيشتغل لما يكون التقاطع ب صفر او ب 0.2 مع الفيوبورت
//   // وهيفصل اول ما يكون التقاطع اكبر او في قيمة مش موجودة من الليسته بتاعت الثريشولد
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

///////////////////////

//Implement sticky navigation with IntersectionObserver

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const ent = entries[0];
  if (ent.isIntersecting) {
    nav.classList.remove('sticky');
  } else {
    nav.classList.add('sticky');
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

//Reveal Sections
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target); //for performance
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(section => {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});
//////////////////////////////////////

//* Lazy Loading Images : Performance ♥

const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = (entries, observer) => {
  const [entry] = entries;
  const img = entry.target;

  if (!entry.isIntersecting) return;

  //Replace src with data-src
  img.src = img.dataset.src;

  img.addEventListener('load', function (e) {
    img.classList.remove('lazy-img');
  });
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

//* Slider

const sliders = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlides = slides.length;

  //Functions

  const createDots = function () {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  const nextSlide = () => {
    curSlide = curSlide === maxSlides - 1 ? 0 : curSlide + 1;
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = () => {
    curSlide = curSlide === 0 ? maxSlides - 1 : curSlide - 1;
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  //Initialization
  const init = () => {
    //start from left.
    createDots();
    goToSlide(0);
    activateDot(0);
  };
  init();

  //Event Handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const slide = +e.target.dataset.slide;
      curSlide = slide;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};

sliders();
