const burgerMobileButton = document.querySelector('.header-container__button');
const menuMobile = document.querySelector('.header-container__menu');
const closeMobileButton = document.querySelector('.close-button');

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