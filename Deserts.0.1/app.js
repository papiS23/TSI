const sahara = document.querySelector('.main__desert--sahara');
const gobi = document.querySelector('.main__desert--gobi');
const kalahari = document.querySelector('.main__desert--kalahari');
const wiktoria = document.querySelector('.main__desert--australia');
const bgImage = document.querySelector('.bg-image');
const mainTextBold = document.querySelector('.text__bold');
const mainText = document.querySelector('.text__description');

sahara.addEventListener('click', e=>{
    bgImage.classList.remove('bg-image--gobi','bg-image--kalahari', 'bg-image--australia');
    mainTextBold.innerHTML = 'Sahara';
    mainTextBold.style.fontSize = '150px'
    mainText.innerHTML = 'Jest ona największą gorącą pustynią na Ziemi (ma 9 064 300 km²), rozciągająca się na 5700 km od Oceanu Atlantyckiego na zachodzie po Morze Czerwone na wschodzie';
});

gobi.addEventListener('click', e=>{
    bgImage.classList.remove('bg-image--kalahari', 'bg-image--australia');
    bgImage.classList.add('bg-image--gobi');
    mainTextBold.innerHTML = 'Gobi';
    mainTextBold.style.fontSize = '150px'
    mainText.innerHTML = 'Wyżynny obszar stepów, półpustyń i pustyń w Azji Wschodniej, leżący na terenie południowej Mongolii i północnych Chin. Po Saharze druga pod względem wielkości pustynia świata';
});

kalahari.addEventListener('click', e=>{
    bgImage.classList.remove('bg-image--gobi', 'bg-image--australia');
    bgImage.classList.add('bg-image--kalahari');
    mainTextBold.innerHTML = 'Kalahari';
    mainTextBold.style.fontSize = '150px'
    mainText.innerHTML = 'Powierzchnia Kalahari wynosi ok. 930 tys. km². Otaczająca ją Niecka Kalahari obejmuje powierzchnię ok. 2,5 mln km², rozciągając się dalej na tereny Botswany, Namibii i RPA, a nawet na tereny Angoli, Zambii i Zimbabwe.';
});

wiktoria.addEventListener('click', e=>{
    bgImage.classList.remove('bg-image--gobi','bg-image--kalahari');
    bgImage.classList.add('bg-image--australia');
    mainTextBold.innerHTML = 'Wielka Pustynia Wiktorii';
    mainTextBold.style.fontSize = '60px'
    mainText.innerHTML = 'Piaszczysta pustynia w południowo-wschodniej części Australii Zachodniej i północno-zachodniej Australii Południowej granicząca od północy z Pustynią Gibsona.';
})
