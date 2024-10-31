var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 3000,
    },
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 80,
        depth: 200,
        modifier: 1,
        slideShadows: false,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


    on: {
        click: function (swipe) {

            const audioplayer = document.querySelector
            ('audio[data-key="play_track"]')

            if(swipe.target.dataset.audio){
                audioplayer.src = swipe.target.dataset.audio;
                audioplayer.play();
                audioplayer.addEventListener('play', () => {
                    audioplayer.style.display = "block"
                })
                audioplayer.addEventListener('pause', () => {
                    audioplayer.style.display = 'none';
                })
                audioplayer.addEventListener('ended', () => {
                    audioplayer.style.display = 'none';
                })
            }
        }
    }
})




