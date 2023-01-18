const burgerMobileButton = document.querySelector('.header-button');
const menuMobile = document.querySelector('.header-menu--mobile');
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