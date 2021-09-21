function scrollUp() {
  const toTopBtn = document.querySelector('.toup');

  window.onscroll = () => {
    if (window.pageYOffset > 450) {
      toTopBtn.classList.add('vis-start');
      toTopBtn.classList.remove('vis-end');
    } else {
      toTopBtn.classList.add('vis-end');
      toTopBtn.classList.remove('vis-start');
    }
  };

  // Plynulé posouvání nahoru
  toTopBtn.addEventListener('click', () => {
    window.scrollBy({
      top: -document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  });
}

export default scrollUp;
