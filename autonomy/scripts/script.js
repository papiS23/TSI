const all_a = document.querySelector('.all_a');
const a = document.querySelectorAll('.activate');
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