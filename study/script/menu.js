const menuButton = document.querySelector('.hamburger');
const nav = document.querySelector('#menu');
const logo_1 = document.querySelector('#logo');

menuButton.addEventListener('click', ()=>{
    nav.classList.toggle('showMenu');
})

logo_1.addEventListener('click', ()=>{
    nav.classList.remove('showMenu');
})

