// navbar
const openHam = document.querySelector('#openHam');
const closeHam = document.querySelector('#closeHam');
const navigationItems = document.querySelector('#site-menu');
const navLink = document.querySelectorAll('#nav-link');

const hamburgerEvent = (navigation, close, open) => {
    navigationItems.style.display = navigation;
    closeHam.style.display = close;
    openHam.style.display = open;
};

openHam.addEventListener('click', () => hamburgerEvent("flex", "block", "none"));
closeHam.addEventListener('click', () => hamburgerEvent("none", "none", "block"));

navLink.forEach(link => {
    link.addEventListener('click', () => {
        navigationItems.style.display = "none";
        closeHam.style.display = "none";
        openHam.style.display = "block";
    });
});

// loader
function siteLoader() {
    let loader = document.querySelector(".site-loader");
    loader.style.display = "none";
}