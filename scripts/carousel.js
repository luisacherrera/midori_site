const carousel = document.getElementById('carousel');
const scroll = setTimeout(scroller, 5000);

// window.addEventListener('touchend', manualScroll);

scroll;

function scroller() {
    const scroll = setTimeout(scroller, 5000);
    const lastScroll = carousel.scrollWidth - carousel.clientWidth;
    carousel.scrollLeft += carousel.clientWidth

    if ( carousel.scrollLeft < lastScroll) {
        scroll;
    } else {
        carousel.scrollLeft = 0;
        scroll;    
    };
};

// function manualScroll() {
//     const lastScroll = carousel.scrollWidth - carousel.clientWidth;
//     carousel.scrollLeft += carousel.clientWidth

//     if ( carousel.scrollLeft < lastScroll) {
//         manualScroll;
//     } else {
//         carousel.scrollLeft = 0;
//         manualScroll;    
//     };
// };