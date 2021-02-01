const sahara = document.querySelector('.main__desert--sahara');
const gobi = document.querySelector('.main__desert--gobi');
const kalahari = document.querySelector('.main__desert--kalahari');
const wiktoria = document.querySelector('.main__desert--australia');
const bgImage = document.querySelector('.bg-image');
const mainText = document.querySelector('.text__bold');

sahara.addEventListener('click', e=>{
    bgImage.classList.remove('bg-image--gobi','bg-image--kalahari', 'bg-image--australia');
    mainText.innerHTML = 'Sahara';
    mainText.style.fontSize = '150px'
});

gobi.addEventListener('click', e=>{
    bgImage.classList.remove('bg-image--kalahari', 'bg-image--australia');
    bgImage.classList.add('bg-image--gobi');
    mainText.innerHTML = 'Gobi';
    mainText.style.fontSize = '150px'
});

kalahari.addEventListener('click', e=>{
    bgImage.classList.remove('bg-image--gobi', 'bg-image--australia');
    bgImage.classList.add('bg-image--kalahari');
    mainText.innerHTML = 'Kalahari';
    mainText.style.fontSize = '150px'
});

wiktoria.addEventListener('click', e=>{
    bgImage.classList.remove('bg-image--gobi','bg-image--kalahari');
    bgImage.classList.add('bg-image--australia');
    mainText.innerHTML = 'Wielka Pustynia Wiktorii';
    mainText.style.fontSize = '50px'
})
