var swiper = new Swiper(".slider--single-slide", {
    autoplay: {
    delay: 3000, // Adjust the delay (milliseconds)
    disableOnInteraction: false, // Keep autoplay on interaction
    },
    loop: true, // Enable looping back to the first slide
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
    prev: {
        shadow: true,
        translate: [0, 0, -400],
    },
    next: {
        translate: ["100%", 0, 0],
    },
    },
});
console.log('hello')