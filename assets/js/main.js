let menu = document.getElementById('menu-icon');
let navbar = document.querySelector('.menu')

menu.addEventListener('click', () => {
    menu.classList.toggle('main-menu');
    navbar.classList.toggle('open');
})

function reveal() {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 100;

        if(elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
        } else {
            reveal.classList.remove('active');
        }
    });
}

window.addEventListener("scroll", reveal);