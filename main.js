/*
Tic Tac Toe
Author : Joe Marcotte
Date: 5/24/2022
*/


let turn = 0;
let resetBtn = document.querySelector(".reset-btn");
let result = document.querySelector(".results-box");
let board = ["", "", "", "", "", "", "", "", ""];

/*
2D array used to store all the winning combinations for tic tac toe and the corresponding indexes
*/
const winComb = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

/*
Adding event listener for clicks for all of the boxes inside of the grid
*/
let boxes = document.querySelectorAll(".box");
boxes.forEach((box) =>
  box.addEventListener("click", () => {
    //checking if box hasn't been clicked on
    if (box.textContent == "") {
      //fills box with the current players marker (X or O)
      box.textContent = fill();
    }
    //updates the board at the index of the box clicked
    board[box.getAttribute("index")] = box.textContent;
    check();
  })
);

/*
updates turn counter and uses that to see whos turn it is and updates the box clicked accordingly
*/
function fill() {
  if (turn % 2 != 0) {
    turn++;
    return "X";
  } else {
    turn++;
    return "O";
  }
}

/*
resets game by reseting all global variables and the board
*/
function reset() {
  board = ["", "", "", "", "", "", "", "", ""];
  let buttons = document.querySelectorAll(".box");
  for (const button of buttons) {
    button.textContent = "";
  }
  result.textContent = "";
  turn = 0;
}

resetBtn.addEventListener("click", () => {
  reset();
});

/*
Alogorithm for checking who won and displays that to the user
*/
function check() {
  //if all boxes are filled and nothing else can be done
  if (turn == 9) {
    result.textContent = "This game is a tie!! CAT!!";
  }
  /*loops through the winning combination 2D array
  and first checks if any of the board items are blank to 
  avoid a bug where all of them are the same but blank.
  If the board at the indexes of the winning combination are all the same,
  that means that there is a winner.*/
  for (const element of winComb) {
    if (
      board[element[0]] == "" ||
      board[element[1]] == "" ||
      board[element[2]] == ""
    ) {
      continue;
    }
    if (
      board[element[0]] == board[element[1]] &&
      board[element[1]] == board[element[2]]
    ) {
      result.textContent =
        "Player that used " + board[element[0]] + " WINS!!!!!!!";
    }
  }
}
