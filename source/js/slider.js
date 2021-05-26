const slides = document.querySelectorAll('.slider__slide');
const pagination = document.querySelector('.slider__pagination');
const bullets = document.querySelectorAll('.slider__bullet');
const btnPrev = document.querySelector('.slider__btn--prev');
const btnNext = document.querySelector('.slider__btn--next');


const clearActiveBullet = () => {
  bullets.forEach((bullet) => {
    const isIsoldaActive = bullet.classList.contains('slider__bullet--isolda-active');
    const isPamelaActive = bullet.classList.contains('slider__bullet--pamela-active');
    const isLleynActive = bullet.classList.contains('slider__bullet--lleyn-active');

    if (isIsoldaActive) {
      bullet.classList.remove('slider__bullet--isolda-active');
    }

    if (isPamelaActive) {
      bullet.classList.remove('slider__bullet--pamela-active');
    }

    if (isLleynActive) {
      bullet.classList.remove('slider__bullet--lleyn-active');
    }
  });
};

const clearActiveSlide = () => {
  slides.forEach((slide) => {
    const isSlideActive = slide.classList.contains('slider__slide--current');

    if (isSlideActive) {
      slide.classList.remove('slider__slide--current');
    }
  });
};

// настройка пагинации слайдера

pagination.addEventListener('click', (evt) => {
  evt.preventDefault();

  const isIsolda = evt.target.classList.contains('slider__bullet--isolda');
  const isPamela = evt.target.classList.contains('slider__bullet--pamela');
  const isLleyn = evt.target.classList.contains('slider__bullet--lleyn');

  const setPagination = (slideName, bulletActiveName) => {
    const slide = document.querySelector(slideName);

    clearActiveBullet();
    clearActiveSlide();

    slide.classList.add('slider__slide--current');
    evt.target.classList.add(bulletActiveName);
  };

  if (isIsolda) {
    setPagination('.char--isolda', 'slider__bullet--isolda-active');
  }

  if (isPamela) {
    setPagination('.char--pamela', 'slider__bullet--pamela-active');
  }

  if (isLleyn) {
    setPagination('.char--lleyn', 'slider__bullet--lleyn-active');
  }
});

// настройка кнопок слайдера

let slideIndex = 1;

const showSlides = (n) => {
  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  const clearCurrentSlide = () => {
    slides.forEach((slide) => {
      slide.classList.remove('slider__slide--current');
    });
  };

  const addCurrentsElements = () => {
    let currentIndex = slideIndex - 1;

    const isIsoldaBullet = bullets[currentIndex].classList.contains('slider__bullet--isolda');
    const isPamelaBullet = bullets[currentIndex].classList.contains('slider__bullet--pamela');
    const isLleynBullet = bullets[currentIndex].classList.contains('slider__bullet--lleyn');

    slides[currentIndex].classList.add('slider__slide--current');

    if (isIsoldaBullet) {
      bullets[currentIndex].classList.add('slider__bullet--isolda-active');
    }

    if (isPamelaBullet) {
      bullets[currentIndex].classList.add('slider__bullet--pamela-active');
    }

    if (isLleynBullet) {
      bullets[currentIndex].classList.add('slider__bullet--lleyn-active');
    }
  };

  clearCurrentSlide();
  clearActiveBullet();

  addCurrentsElements();
};


const showNextSlide = () => {
  showSlides(slideIndex += 1);
};

const showBackSlide = () => {
  showSlides(slideIndex -= 1);
};


btnNext.addEventListener('click', (evt) => {
  evt.preventDefault();

  showNextSlide();
});

btnPrev.addEventListener('click', (evt) => {
  evt.preventDefault();

  showBackSlide();
});
