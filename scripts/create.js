import carouselElements from './photosHome.js';

const list = document.getElementById('carousel');

function buildElements(name, path) {
    let item = document.createElement('li');
    item.className = 'carousel-item';
    item.innerHTML = `
            <div class="carousel-item_container">
                <a href="" class="carousel-item_container_link">
                    <div class="text-container">
                        <div class="text-container_center">
                            <p class="carousel-item_container_description">${name}</p>
                        </div>
                    </div>    
                    <img src="${path}" alt="${name}" class="carousel-item_container_image">
                </a>
            </div>`
    
    list.appendChild(item);
}

carouselElements.photos.forEach(photo => buildElements(photo.name, photo.file));