const list = document.querySelector(".todo-list");
const input = document.querySelector(".form-container__input");
const submit = document.querySelector(".form-container__submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  addTodo(input);
  const inputValue = input.value;
  input.value = "";
});

function addTodo(input) {
  const li = document.createElement("li");
  const p = document.createElement("p");
  const button_completed = document.createElement("button");
  const button_delete = document.createElement("button");

  li.classList.add("todo-list__item");
  p.classList.add("todo-list__p");
  button_completed.classList.add("todo-list__button");
  button_completed.classList.add("todo-list__button--completed");
  button_delete.classList.add("todo-list__button");
  button_delete.classList.add("todo-list__button--delete");

  p.innerText = input.value;

  li.appendChild(p);
  li.appendChild(button_completed);
  li.appendChild(button_delete);
  list.appendChild(li);

  button_delete.addEventListener("click", () => {
    li.remove();
  });
  button_completed.addEventListener("click", () => {
    li.classList.toggle("todo-list__item--completed");
  });
}
