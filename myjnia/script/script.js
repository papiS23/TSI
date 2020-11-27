const usluga = document.querySelectorAll('.container main form .usluga label input');
const pojazd = document.querySelectorAll('.container main form .pojazd select option');
const karta = document.querySelectorAll('.container main form .karta label input');
const wynik = document.querySelector('#cena');
const submit = document.getElementById('#submit');

let cena = 0;

function oblicz_usluge(){
    for(let i = 0; i< usluga.length; i++){
        if(usluga[i].checked == true){
            cena = cena + parseInt(usluga[i].getAttribute("value"));
            console.log(cena);
        }
    }
    for(let i = 0; i < pojazd.length; i++){
        if(pojazd[i].checked == true){
            cena = cena * parseInt(pojazd[i].getAttribute("value"));
            console.log(cena);
    }
    }
    for(let i = 0; i < karta.length; i++){
        if(karta[i].checked == true){
            cena = cena * parseInt(karta[i].getAttribute("value"));
            console.log(cena);
        }
    }
    wynik.innerHTML = `Cena wynosi: ${cena}zł`;

    return cena;
}

submit.onclick = oblicz_usluge();

