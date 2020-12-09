const all_a = document.querySelector('.all_a');
const a = document.querySelectorAll('.activate');
const h1 = document.querySelector('#h1');
console.log(all_a);

all_a.addEventListener("mousedown", () => {
        for (let i = 0; i < a.length; i++) {
            a[i].classList.remove('active');
        }
        for(let i = 0; i < a.length; i++){
        a[i].addEventListener("mouseup", ()=>{
            a[i].classList.add('active');
        })
        }
})

h1.addEventListener("click", ()=>{
    for (let i = 0; i < a.length; i++) {
        a[i].classList.remove('active');
    }
    a[0].classList.add('active');
})