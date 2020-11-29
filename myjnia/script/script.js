const usluga = document.querySelectorAll('.container main form .usluga label input');
const pojazd = document.querySelectorAll('.container main form .pojazd select option');
const karta = document.querySelectorAll('.container main form .karta label input');
const wynik = document.querySelector('#cena');
const submit = document.getElementById('#submit');

let cena = 0;

function oblicz_usluge(){
    for(let i = 0; i< usluga.length; i++){
        if(usluga[i].checked == true){
            cena = cena + usluga[i].getAttribute("value");
            console.log(usluga[i].getAttribute("value"));
        }
    }
    for(let i = 0; i < pojazd.length; i++){
        if(pojazd[i].checked == true){
            cena = cena * pojazd[i].getAttribute("value");
            console.log(pojazd[i].getAttribute("value"));
        }
    }
    for(let i = 0; i < karta.length; i++){
        if(karta[i].checked == true){
            cena = cena * karta[i].getAttribute("value");
            console.log(karta[i].getAttribute("value"));
        }
    }
    wynik.innerHTML = `Cena wynosi: ${cena}zł`;

    return cena;
}

submit.addEventListener("click", oblicz_usluge);

