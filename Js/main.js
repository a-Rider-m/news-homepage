const burgerMobileButton = document.querySelector('.burger-button');
const navBar = document.querySelector('.nav-bar');
const closeMobileButton = document.querySelector('.close-button');

burgerMobileButton.addEventListener('click', toggleMobileMenu);
closeMobileButton.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    const isMobileMenuClosed = navBar.classList.contains("inactive");

    if (isMobileMenuClosed) {
        navBar.classList.toggle('inactive');
    }

    if (!isMobileMenuClosed) {
        navBar.classList.add('inactive');
    }
}