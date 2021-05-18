const przycisk = document.querySelector("button");
const wartosci = document.querySelectorAll("input");
const result = document.querySelector(".wynik");

przycisk.addEventListener("click", function () {
  wartosci.forEach(function (wartosc) {
    if (wartosc.checked) {
      result.innerText = `Cena strzyżenia: ${wartosc.value}`;
    }
  });
});
