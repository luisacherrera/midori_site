const carousel = document.getElementById('carousel');
const items = document.getElementsByClassName('carousel-item');

let currentItem; 

window.addEventListener('touchmove', manualScroll);
window.addEventListener('resize', orientation);

const scroll = setTimeout(scroller, 5000);
scroll;

function scroller() {
    const scroll = setTimeout(scroller, 5000);
    let lastScroll = carousel.scrollWidth - window.innerWidth;
    carousel.scrollLeft += window.innerWidth

    if ( carousel.scrollLeft < lastScroll) {
        scroll;
    } else {
        carousel.scrollLeft = 0;
        scroll;    
    };


    Object.entries(items).forEach(element => {
        if ( isInViewport(element[1]) ) {
            currentItem = element;
        };
    });
};

function manualScroll() {
    const lastScroll = carousel.scrollWidth - window.innerWidth;
    carousel.scrollLeft += window.innerWidth

    if ( carousel.scrollLeft < lastScroll) {
        manualScroll;
    } else {
        carousel.scrollLeft = 0;
        manualScroll;    
    };
};

function orientation() {
    let position = currentItem[0];
    let movement = window.innerWidth * position;

    carousel.scrollLeft = movement;
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();

    if (rect.x === 0) {
        return element
    }
}