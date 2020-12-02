const all_a = document.querySelectorAll('.activate');
console.log(all_a);

all_a.addEventListener("mousedown", () => {
        for (let i = 0; i < all_a.length; i++) {
            all_a[i].classList.remove('active');
    }
    for(let i = 0; i < all_a.length; i++){
        all_a[i].addEventListener("mouseup", ()=>{
            all_a[i].classList.add('active');
        })
    }
        
})