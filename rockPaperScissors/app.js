const btns = document.querySelectorAll(".choice-div__btn");
const computerChoice = document.querySelector(".choice-div__computer-choice");
const result = document.querySelector(".choice-div__result-p");

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    //COMPUTER CHOICE
    const randomNum = Math.floor(Math.random() * 3);
    const choiceTable = ["Rock", "Paper", "Scissors"];
    computerChoice.innerText = choiceTable[randomNum];

    //COMPARING CHOICES
    if (btn.value == choiceTable[randomNum]) {
      result.innerText = "Draw!";
    } else if (btn.value == "Rock") {
      if (choiceTable[randomNum] == "Paper") {
        result.innerText = "You lost!";
      } else {
        result.innerText = "You won!";
      }
    } else if (btn.value == "Paper") {
      if (choiceTable[randomNum] == "Scissors") {
        result.innerText = "You lost!";
      } else {
        result.innerText = "You won!";
      }
    } else if (btn.value == "Scissors") {
      if (choiceTable[randomNum] == "Rock") {
        result.innerText = "You lost!";
      } else {
        result.innerText = "You won!";
      }
    }

    //VISUAL BUTTONS SELECTION
    btns.forEach((btn) => {
      btn.classList.remove("choice-div__btn--active");
    });
    btn.classList.add("choice-div__btn--active");
  });
});
