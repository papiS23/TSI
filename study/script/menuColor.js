const li = document.querySelectorAll('#menu ul li');
const logo = document.querySelector('#logo');

for(let i=0; i<li.length;i++){
    li[i].addEventListener('click', ()=>{
        for(let k=0; k<li.length; k++){
            li[k].classList.remove('active');
        }
        li[i].classList.add('active')
    })
}

logo.addEventListener('click', ()=>{
    for(let k=0; k<li.length; k++){
        li[k].classList.remove('active');
    }
    li[0].classList.add('active');
})