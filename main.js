const hamOpen = document.querySelector(".header-right>a");
const menuOpen = document.querySelector(".hamburger-menu");
const hamClose = document.querySelector(".hamburger-menu>a");

hamOpen.addEventListener('click', function(){
    menuOpen.style.display = "block";
});

hamClose.addEventListener('click', function () {
    menuOpen.style.display = "none";
});