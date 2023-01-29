let menu = document.getElementById('menu-icon');
let navbar = document.querySelector('.menu')

menu.addEventListener('click', () => {
    menu.classList.toggle('main-menu');
    navbar.classList.toggle('open');
})