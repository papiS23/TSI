const submit = document.querySelector(".submit");
const select = document.querySelector("#dni");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  const options = document.querySelectorAll("#dni option");
  options.forEach(function (option) {
    if (option.selected) {
      console.log(option.value);
    }
  });
});
