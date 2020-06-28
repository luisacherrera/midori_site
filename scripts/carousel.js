const carousel = document.getElementById('carousel');
const carouselTotalWidth = carousel.scrollWidth;
const carouselMovement = window.innerWidth;
const scroll = setTimeout(scroller, 5000);

window.addEventListener('touchend', manualScroll);

scroll;

function scroller() {
    const scroll = setTimeout(scroller, 5000);
    const lastScroll = carouselTotalWidth - carouselMovement;
    carousel.scrollLeft += carouselMovement

    if ( carousel.scrollLeft < lastScroll) {
        scroll;
    } else {
        carousel.scrollLeft = 0;
        scroll;    
    };
};

function manualScroll() {
    const lastScroll = carouselTotalWidth - carouselMovement;
    carousel.scrollLeft += carouselMovement

    if ( carousel.scrollLeft < lastScroll) {
        manualScroll;
    } else {
        carousel.scrollLeft = 0;
        manualScroll;    
    };
};