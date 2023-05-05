const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const burguerMenu = document.querySelector('.menu');

burguerMenu.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('inactive')
})

menuEmail.addEventListener('click', toggleDesktopMenu)

function toggleDesktopMenu() {
    //classList.toggle() pone o quita la clase inactive dependiendo de si la tiene o no
    desktopMenu.classList.toggle('inactive')
}