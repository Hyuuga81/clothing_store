const menuOverlay = document.querySelector(".menu-overlay");
const menuContent = document.querySelector('.menu-overlay-content');
const menuContainer = document.querySelector('.menu-overlay-content .container');
const hamburger = document.querySelector('.fa-bars');
const close = document.querySelector('.fa-xmark');

hamburger.addEventListener('click', function() {
    if (window.screen.width <= 375) {
        menuContent.style.width = "100%";
    } else if (window.screen.width >= 375 && window.screen.width < 1200) {
        menuContent.style.width = "50%";
    } else if (window.screen.width >= 1200) {
        menuContent.style.width = "25%";
    }
    menuOverlay.classList.remove('hide');
    menuContainer.classList.remove('hide');
});

close.addEventListener('click', function() {
    menuContent.style.width = "0%";
    menuOverlay.classList.add('hide');
    menuContainer.classList.add('hide');
});

