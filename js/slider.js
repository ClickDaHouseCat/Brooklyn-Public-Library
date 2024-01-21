
//Слайдер
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const indicators = document.querySelectorAll('.indicator');
    const carouselButtons = document.querySelector('.carousel-buttons');

    let currentIndex = 0;

  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 465}px)`;
    indicators.forEach((indicator, index) => {
      if (index === currentIndex) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });
  carouselButtons.querySelectorAll('.carousel-button').forEach((button, index) => {
      if (index === currentIndex) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
    if (currentIndex === 0) {
        prevButton.classList.add('disabled');
        nextButton.classList.remove('disabled');
      } else if (currentIndex === 4) { // Здесь 4 это количество слайдов минус количество видимых слайдов
        prevButton.classList.remove('disabled');
        nextButton.classList.add('disabled');
      } else {
        prevButton.classList.remove('disabled');
        nextButton.classList.remove('disabled');
      }

      carouselButtons.querySelectorAll('.carousel-button').forEach((button, index) => {
        if (index === currentIndex) {
          button.classList.add('active');
        } else {
          button.classList.remove('active');
        }
      });
  }

  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  nextButton.addEventListener('click', () => {
    if (currentIndex < 4) {
      currentIndex++;
      updateCarousel();
    }
  });

  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      currentIndex = index;
      updateCarousel();
    });
  });

  updateCarousel();



