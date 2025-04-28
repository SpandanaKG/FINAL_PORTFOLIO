document.addEventListener('DOMContentLoaded', () => {
  const text = "I'm Spandana";
  const h1 = document.querySelector('h1');
  let index = 0;
  h1.textContent = '';

  function typeWriter() {
    h1.textContent = text.slice(0, index);
    index++;
    if (index <= text.length) {
      setTimeout(typeWriter, 150);
    } else {
      setTimeout(() => {
        index = 0;
        typeWriter();
      }, 2000);
    }
  }

  typeWriter();
});


// Show sections on scroll
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top <= (window.innerHeight || document.documentElement.clientHeight) - 100;
}

function showElementsOnScroll() {
  const elements = document.querySelectorAll('.first-container, .second-container, .third-container');
  elements.forEach((el) => {
    if (isInViewport(el)) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', showElementsOnScroll);
window.addEventListener('load', showElementsOnScroll);
