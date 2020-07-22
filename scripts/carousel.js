const carousel = document.getElementById('carousel');
const items = document.getElementsByClassName('carousel-item');

let currentItem; 

window.addEventListener('touchmove', manualScroll);
window.addEventListener('resize', checkOrientation);

const scroll = setTimeout(scroller, 5000);
scroll;

function scroller() {
    const scroll = setTimeout(scroller, 5000);
    let scrollingEnd = carousel.scrollWidth - window.innerWidth;
    carousel.scrollLeft += window.innerWidth

    if ( carousel.scrollLeft < scrollingEnd) {
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

function checkOrientation() {
    let itemInViewport = currentItem[0];
    let adjustToViewport = window.innerWidth * itemInViewport;

    carousel.scrollLeft = adjustToViewport;
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();

    if (rect.x === 0) {
        return element
    }
}