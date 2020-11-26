const usluga = document.querySelectorAll('.container main form .usluga label input');
const pojazd = document.querySelectorAll('.container main form .pojazd select option');
const karta = document.querySelectorAll('.container main form .karta label input');

let cena = 0;

function oblicz_usluge(){
for(let i = 0; i< usluga.length; i++){
    if(usluga[i].checked == true){
        cena += parseInt(usluga[i].value);
    }
}
for(let i = 0; i < pojazd.length; i++){
    if(pojazd[i].checked == true){
        cena = cena * parseInt(pojazd[i].value);
}
}
for(let i = 0; i < karta.length; i++){
    if(karta[i].checked == true){
        cena = cena * parseInt(karta[i].value);
    }
}
return cena;
}

const submit = document.querySelector('#submit');
submit.onclick = oblicz_usluge();

const wynik = document.querySelector('#cena');
wynik.innerHTML = `Cena wynosi: ${oblicz_usluge()}zł`;

console.log(oblicz_usluge());