document.addEventListener('DOMContentLoaded', function () {
    const photos = [
        'assets/images/fennecfox.png',
        'assets/images/humpback.png',
        'assets/images/commonbrown.png',
        'assets/images/spotteddeer.png'
    ];

    const photoContainers = document.querySelectorAll('.photo-container');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const closeBtn = document.querySelector('.lightbox .close');

    photoContainers.forEach((container, index) => {
        container.addEventListener('click', function () {
            lightboxImage.src = photos[index];
            lightbox.classList.add('visible');
        });
    });

    closeBtn.addEventListener('click', function () {
        lightbox.classList.remove('visible');
    });

    lightbox.addEventListener('click', function (event) {
        if (event.target !== lightboxImage) {
            lightbox.classList.remove('visible');
        }
    });
});
