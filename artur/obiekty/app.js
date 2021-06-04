const input = document.querySelector(".main__input");
const submit = document.querySelector(".main__submit");
const list = document.querySelector(".main__list");
const select = document.querySelector(".main__select");
class Item {
  constructor(input, selectList, len) {
    this.mainValue = input.value;
    this.optionValues = selectList.value;
    this.index = len;
  }
}

let items = [];

submit.addEventListener("click", function (e) {
  e.preventDefault();
  const lenght = items.length;

  const item = new Item(input, select, lenght);

  const itemDiv = document.createElement("div");
  itemDiv.classList.add("main__item-div");
  switch (item.optionValues) {
    case "1":
      itemDiv.style.backgroundColor = "#8BDF68";
      break;
    case "2":
      itemDiv.style.backgroundColor = "#F5C000";
      break;
    case "3":
      itemDiv.style.backgroundColor = "#F25918";
      break;
  }

  const itemP = document.createElement("p");
  itemP.classList.add("main__item-p");
  itemP.innerText = item.mainValue;
  input.value = "";

  const itemComBtn = document.createElement("button");
  itemComBtn.classList.add("main__button", "main__button--completed");
  const btnImg = document.createElement("img");
  btnImg.classList.add("main__btn-img");
  btnImg.src = "./imgs/completed.svg";
  itemComBtn.appendChild(btnImg);

  itemComBtn.addEventListener("click", function () {
    itemDiv.classList.toggle("main__item-div--completed");
  });

  const itemDelBtn = document.createElement("button");
  itemDelBtn.classList.add("main__button", "main__button--delete");
  const btnImgDel = document.createElement("img");
  btnImgDel.classList.add("main__btn-img");
  btnImgDel.src = "./imgs/delete.svg";
  itemDelBtn.appendChild(btnImgDel);
  itemDelBtn.addEventListener("click", function () {
    itemDiv.remove();
    const itemNumber = item.index;
    items.forEach((item) => {
      if (item.index === itemNumber) {
        items.splice(itemNumber, 1);
      }
    });
  });

  itemDiv.appendChild(itemP);
  itemDiv.appendChild(itemComBtn);
  itemDiv.appendChild(itemDelBtn);
  list.appendChild(itemDiv);

  items.push(item);

  console.log(items);
});
