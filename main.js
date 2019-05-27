const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.navigation-list');
const navLinks = document.querySelectorAll('.nav-links');
const overlay = document.querySelector('#overlay');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navList.classList.toggle('active');
  for(let i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.toggle('active');
  }
  overlay.classList.toggle('nav-is-active');
  if(overlay.classList.contains('nav-is-active')) {
    overlay.style.zIndex = '1';
  } else {
    overlay.style.zIndex = '-1';
  }
});

navList.addEventListener('click', (event) => {
  if(event.target.tagName === 'A') {
    hamburger.classList.remove('active');
    navList.classList.remove('active');
    overlay.classList.remove('nav-is-active');
    for(let i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.remove('active');
    }
  }
});