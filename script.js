document.addEventListener('DOMContentLoaded', function() {
    const scrollDown = document.querySelector('.scroll-down');

    scrollDown.addEventListener('click', function() {
        const targetSection = document.querySelector('.section:not(.intro):not(.active)');
        
        if (targetSection) {
            anime({
                targets: 'html, body',
                scrollTop: targetSection.offsetTop,
                duration: 1000,
                easing: 'easeInOutCubic'
            });
            targetSection.classList.add('active');
        }
    });
});
