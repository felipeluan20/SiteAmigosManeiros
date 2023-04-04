const galleryContainer = document.getElementById("gallery-container");
const images = [
"./fotos/vic-picrew.jpeg",
"./fotos/foto unica vic.png",
"./fotos/luli.picrew.jpeg",
"./fotos/foto unica luli.png",
"./fotos/max.picrew.jpeg",
"./fotos/foto unica max2.png",
"./fotos/felipe.picrew.jpeg",
"./fotos/foto unica felipe.png"
];

images.forEach(imageSrc => {
const img = document.createElement("img");
img.src = imageSrc;
galleryContainer.appendChild(img);
});

$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
        scrollTop: target.offset().top
        }, 1000);
    }
    });
});
