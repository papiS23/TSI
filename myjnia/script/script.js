const usluga = document.querySelectorAll('.container main form .usluga label input');
const pojazd = document.querySelectorAll('.container main form .pojazd select option');
const karta = document.querySelectorAll('.container main form .karta label input');
const wynik = document.querySelector('#cena');
const submit = document.querySelector('#submit');

let cena = 0;


submit.addEventListener("click", function (evt) {
        evt.preventDefault();
        cena = 0; //zerowanie ceny
        for (let i = 0; i < usluga.length; i++) {
            if (usluga[i].checked == true) {
                cena += parseInt(usluga[i].getAttribute("value"));
            }
        }
        for (let i = 0; i < pojazd.length; i++) {
            if (pojazd[i].selected == true) {
                cena = cena * parseFloat(pojazd[i].getAttribute("value"));
            }
        }
        for (let i = 0; i < karta.length; i++) {
            if (karta[i].checked == true) {
                cena = cena * parseFloat(karta[i].getAttribute("value"));
            }
        }
        wynik.innerHTML = `Cena wynosi: ${cena}zł`;
    })



