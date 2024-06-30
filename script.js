// Animation for the intro message on page load
anime({
    targets: '#intro-message',
    translateY: [-50, 0],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 1500
});
