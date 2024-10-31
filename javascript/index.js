
document.addEventListener('DOMContentLoaded', () => {

  // Function to wrap each word of an element in a span
  function wrapWords(element) {
    element.innerHTML = element.textContent.split(' ').map(word => `<span>${word}</span>`).join(' ');
  }

  // Select elements to animate
  const h1 = document.querySelector('.animate-text h1');
  const h2 = document.querySelector('.animate-text h2');
  const p = document.querySelector('.animate-text p');
      
  // Wrap each word of h1, h2, and p in <span> elements
  wrapWords(h1);
  wrapWords(h2);
  wrapWords(p);

  // Select all spans within h1, h2, and p (individual words)
  const h1Words = document.querySelectorAll('.animate-text h1 span');
  const h2Words = document.querySelectorAll('.animate-text h2 span');
  const pWords = document.querySelectorAll('.animate-text p span');

  // Create a GSAP timeline for animations
  gsap.timeline()
    .from(h1Words, {
      delay: 0.75,
      duration: 1.5,
      opacity: 0,
      y: 100,
      rotation: index => index % 2 === 0 ? 10 : -10, // Alternating rotation for wave effect
      ease: 'power4.out',
      stagger: {
        each: 0.1,
        from: 'start'
      }
    })
    .from(h2Words, {
      duration: 1.5,
      opacity: 0,
      y: 100,
      rotation: index => index % 2 === 0 ? 10 : -10,
      ease: 'power4.out',
      stagger: {
        each: 0.1,
        from: 'start'
      }
    }, '-=1') // Overlap the animation of h2 with h1 by 1 second
    .from(pWords, {
      duration: 1.5,
      opacity: 0,
      y: 100,
      rotation: index => index % 2 === 0 ? 10 : -10,
      ease: 'power4.out',
      stagger: {
        each: 0.08,
        from: 'start'
        }
      }, '-=1'); // Overlap the animation of p with h2 by 1 second
      
      
  gsap.from(".intro .profile_picture img", {
    duration: 1.5,
    opacity: 0,
    y: 50,
    stagger: 0.3,
  });

});
        
