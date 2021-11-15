const inputy = document.querySelectorAll("input");
const btn = document.querySelector("button");
const result = document.querySelector(".result");

btn.addEventListener("click", function () {
  const wartosci = [
    parseFloat(inputy[0].value),
    parseFloat(inputy[1].value),
    parseFloat(inputy[2].value),
  ];

  if (isNaN(wartosci[0]) && isNaN(wartosci[1]) && isNaN(wartosci[2])) {
    alert("wpisz poprawne dane");
  } else {
    const srednia = (wartosci[0] + wartosci[1] + wartosci[2]) / 3;
    result.innerHTML = `Średnia ocen: ${srednia}`;
  }
});
