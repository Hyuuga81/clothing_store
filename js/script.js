const hamburger = document.querySelector(".hamburger");
const menuOverlay = document.querySelector(".menu-overlay");
const closeMenu = document.querySelector(".fa-xmark");
const paraOverlay = document.querySelector(".menu-overlay p");
const listOverlay = document.querySelector(".menu-overlay ul");
const socials = document.querySelector(".menu-socials");


hamburger.addEventListener("click", function() {
    menuOverlay.style.width = "80%";
    menuOverlay.style.left = "0px";
    paraOverlay.classList.remove("hide");
    listOverlay.classList.remove("hide");
    socials.classList.remove("hide");
});

closeMenu.addEventListener("click", function() {
    menuOverlay.style.width = "0%";
    menuOverlay.style.left = "-50px";
    paraOverlay.classList.add("hide");
    listOverlay.classList.add("hide");
    socials.classList.add("hide");
});