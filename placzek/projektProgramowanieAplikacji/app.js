const submitBtn = document.querySelector(".main__submit");
const input = document.querySelector(".main__input");
const list = document.querySelector(".main__list");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault(); //zapobiega przed odswiezaniem strony po kliknieciu

  const listDiv = document.createElement("div"); //stworzenie diva ktory bedzie zawieral wpisany tekst i buttony
  listDiv.classList.add("list__div"); //dodanie mu klasy zeby go ostylowac

  const listP = document.createElement("p"); //stworzenie p w ktorym bedzie wpisany tekst
  listP.classList.add("list__text"); //dodanie klasy
  listP.innerText = input.value; //wpisanie w p tego co wpisalismy
  listDiv.appendChild(listP); //wsadzenie tego p do diva

  const completeBtn = document.createElement("button"); //stworzenie przycisku do odchaczania
  completeBtn.classList.add("list__btn"); //klasa
  completeBtn.classList.add("list__btn--complete"); //druga klasa bo ta wyzej beda mialy dwa przyciski
  completeBtn.innerText = "Z"; //wpisanie tresci do buttona
  completeBtn.addEventListener("click", function () {
    listDiv.style.opacity = "0.3"; //po kliknieciu w przycisk calosc robi sie bardziej przezroczysta
  });
  listDiv.appendChild(completeBtn); //wsadzenie przycisku do diva

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("list__btn");
  deleteBtn.innerText = "X";
  deleteBtn.addEventListener("click", function () {
    listDiv.remove(); //po kliknieciu calosc sie usuwa
  });
  listDiv.appendChild(deleteBtn);

  list.appendChild(listDiv); //dodanie diva z cala zawartoscia do listy
});
