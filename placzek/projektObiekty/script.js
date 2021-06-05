const textInput = document.querySelector(".main__input--text");
const numberInput = document.querySelector(".main__input--number");
const submitBtn = document.querySelector(".main__submit");
const list = document.querySelector(".main__list");

class Product {
  constructor() {
    this.name = textInput.value;
    this.prise = numberInput.value;
  }
}
let products = [];

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const product = new Product();
  products.push(product);

  const div = document.createElement("div");
  div.classList.add("list__item");

  const p = document.createElement("p");
  p.classList.add("list__p");
  p.innerText = `${product.name} --- ${product.prise}zł`;

  const btnC = document.createElement("button");
  btnC.classList.add("list__btn", "list__btn--c");
  btnC.addEventListener("click", function () {
    div.classList.add("list__item--c");
  });

  const btnD = document.createElement("button");
  btnD.classList.add("list__btn", "list__btn--d");
  btnD.addEventListener("click", function () {
    // console.log(products.indexOf(product));
    products.splice(products.indexOf(product), 1);
    div.remove();
  });

  div.appendChild(p);
  div.appendChild(btnC);
  div.appendChild(btnD);
  list.appendChild(div);
});
