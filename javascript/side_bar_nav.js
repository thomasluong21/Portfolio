window.addEventListener('scroll', () => {
    const stickyNav = document.querySelector('.sticky_nav');
    const section = document.querySelector('section'); // Replace 'section' with the actual class of your section
  
    if (window.scrollY > 0) {
      stickyNav.classList.add('sticky');
      section.classList.add('section-with-border');
    } else {
      stickyNav.classList.remove('sticky');
      section.classList.remove('section-with-border');
    }
});