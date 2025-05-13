let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newbtn = document.querySelector("#newgame-btn");
let turnO = true; //player-O
const winpattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const resetgame = () => {
  turnO = true;
  enableboxes();
  msgcontainer.classList.add("hide");
};
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      //player-O
      box.innerText = "O";
      turnO = false;
    } else {
      //player-X
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkwinner();
  });
});
const disableboxes = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};
const enableboxes = () => {
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showwinner = (winner) => {
  msg.innerText = `Congratulations, winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disableboxes();
};

const checkwinner = () => {
  for (pattern of winpattern) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;
    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log("winner is ", pos1val);
        showwinner(pos1val);
      }
    }
  }
};
newbtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);
