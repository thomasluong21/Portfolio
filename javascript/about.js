gsap.from(".about_bg, .container .grid img, .container .grid div", {
    duration: 1.5,
    opacity: 0,
    y: 50,
    stagger: 0.3,
});
  
const mediaQuery = window.matchMedia("(max-height: 700px) and (min-width: 375px)");

function handleViewportChange(e) {
    const aboutImage = document.querySelector('.about_pic');
    if (e.matches) {
        aboutImage.src = "assets/about/about_me_mobile.png";
    } else {
        aboutImage.src = "assets/about/about_me.png";
    }
}

handleViewportChange(mediaQuery);

mediaQuery.addEventListener("change", handleViewportChange);



