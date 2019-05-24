const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.navigation-list');
const navLinks = document.querySelectorAll('.nav-links');
const overlay = document.querySelector('#overlay');

hamburger.addEventListener('click', (e) => {
  overlay.classList.toggle('nav-is-active');
  hamburger.classList.toggle('active');
  navList.classList.toggle('active');
  for(let i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.toggle('active');
  }

});