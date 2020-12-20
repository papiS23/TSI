const menuButton = document.querySelector('.hamburger');
const nav = document.querySelector('#menu');

menuButton.addEventListener('click', ()=>{
    nav.classList.toggle('showMenu');
})