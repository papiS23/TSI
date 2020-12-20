const li = document.querySelectorAll('#menu ul li');
const menu = document.querySelector('#menu');

menu.addEventListener('mousedown', ()=>{
    for(let i = 0; i<li.length; i++){
        li[i].classList.remove('active');
    }
    for(let i = 0; i<li.length; i++){
        li[i].addEventListener('mouseup',()=>{
            li[i].classList.add('active');
        })
    }
})