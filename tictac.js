let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let newGameBtn = document.querySelector("#new-game-btn");
let turn0 = true;
let winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0 === true) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const showWinner = (winner) => {
    msg.innerText = `Congratulations, the winner is ${winner}!`;
    msgContainer.classList.add("show");
};

let checkWinner = () => {
    for (let pattern of winPattern) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;
        if (val1 !== "" && val2 !== "" && val3 !== "") {
            if (val1 === val2 && val2 === val3) {
                showWinner(val1);
                disableAllBoxes();
                return;
            }
        }
    }
};

const disableAllBoxes = () => {
    boxes.forEach(box => {
        box.disabled = true;
    });
};

resetBtn.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
    msgContainer.classList.remove("show");
});

newGameBtn.addEventListener("click", () => {
    resetBtn.click(); // Reset the game when new game is clicked
});