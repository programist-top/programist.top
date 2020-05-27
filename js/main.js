$(document).ready(function () {
    $('.header').vegas({
        transition: 'fade',
        preloadImage: true,
        shuffle: true,
        cover: true,
        overlay: 'js/overlays/08.png',
        delay: 5000,
        animation: 'kenburns',
        animationDuration: 10000,
        slides: [
            { src: './img/bg.jpg' }

        ]
    });
    $('.lazy').Lazy({
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        visibleOnly: true,
        onError: function (element) {
            console.log('error loading ' + element.data('src'));
        }
    });
});