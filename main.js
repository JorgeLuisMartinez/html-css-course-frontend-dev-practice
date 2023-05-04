const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')

menuEmail.addEventListener('click', toggleDesktopMenu)

function toggleDesktopMenu() {
    //classList.toggle() pone o quita la clase inactive dependiendo de si la tiene o no
    desktopMenu.classList.toggle('inactive')
}