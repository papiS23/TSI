const button = document.querySelector("button");
const inputs = document.querySelectorAll("input");
const result = document.querySelector(".wynik");

button.addEventListener("click", function () {
  inputs.forEach(function (input) {
    if (input.checked) {
      result.innerText = `Cena strzyżenia: ${input.value}`;
    }
  });
});
