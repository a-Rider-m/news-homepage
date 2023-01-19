const burgerMobileButton = document.querySelector('.header-container__button');
const menuMobile = document.querySelector('.menu-container');
const closeMobileButton = document.querySelector('.menu-container__close-button');

burgerMobileButton.addEventListener('click', toggleMobileMenu);
closeMobileButton.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    const isMobileMenuClosed = menuMobile.classList.contains("inactive");

    if (isMobileMenuClosed) {
        menuMobile.classList.toggle('inactive');
    }

    if (!isMobileMenuClosed) {
        menuMobile.classList.add('inactive');
    }
}