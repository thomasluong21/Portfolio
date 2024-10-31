const stickyNav = document.querySelector('.sticky_nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { // Adjust the scroll threshold as needed
    stickyNav.classList.add('sticky');
  } else {
    stickyNav.classList.remove('sticky');
  }
});