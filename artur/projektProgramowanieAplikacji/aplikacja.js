const submitBtn = document.querySelector(".main__submit");
const input = document.querySelector(".main__input");
const list = document.querySelector(".main__list");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const listDiv = document.createElement("div");
  listDiv.classList.add("list__div");

  const listP = document.createElement("p");
  listP.classList.add("list__text");
  listP.innerText = input.value;
  listDiv.appendChild(listP);

  const completeBtn = document.createElement("button");
  completeBtn.classList.add("list__btn");
  completeBtn.classList.add("list__btn--complete");
  completeBtn.innerText = "Z";
  completeBtn.addEventListener("click", function () {
    listDiv.style.opacity = "0.3";
  });
  listDiv.appendChild(completeBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("list__btn");
  deleteBtn.innerText = "X";
  deleteBtn.addEventListener("click", function () {
    listDiv.remove();
  });
  listDiv.appendChild(deleteBtn);

  list.appendChild(listDiv);
});
