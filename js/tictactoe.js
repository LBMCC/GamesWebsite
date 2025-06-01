const combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const cell = document.querySelectorAll(".cell")
console.log(cell);
let turnCount = 1;


const initApp = () => {
    playerOrder();
    gameFlow();
    /*listeners();*/
}

const playerOrder = () => {
    // if go first player is X
    // if go second player is O
    // if random choose randomly
}

const gameFlow = () => {
    cell.forEach(element => {
        element.addEventListener("click", (event) => {
            if (element.textContent === "") {
                if (turnCount % 2 === 1) {
                    element.textContent = "X"
                } else {
                    element.textContent = "O";
                }
                turnCount++;
            }
            checkWin();
        })
    });
}

const checkWin = () => {
    return combinations.some(([a, b, c]) => {
        if (cell[a].textContent === "X" &&
            cell[b].textContent === "X" &&
            cell[c].textContent === "X") {
                const winMessage = document.getElementById("winMessage");
                winMessage.textContent = "X WINS!";
                // if player add point
                // if cpu add point
                resetGame();
                return true;
            }
        if (cell[a].textContent === "O" &&
            cell[b].textContent === "O" &&
            cell[c].textContent === "O") {
                const winMessage = document.getElementById("winMessage");
                winMessage.textContent = "O WINS!";
                // if player add point
                // if cpu add point
                resetGame();
                return true;
            }
        return false;
    })
}

const resetGame = () => {
    turnCount = 1;
    cell.forEach(element => {
        element.textContent = "";
    })
}

/*const listeners = () => {

    let turnCount = 1;

    // TOP LEFT CELL
    topLeft.addEventListener("click", (event) => {
    if (turnCount % 2 === 1) {
        topLeft.textContent = "X";
    } else {
        topLeft.textContent = "O";
    }
    turnCount++;
    })

    // TOP MIDDLE CELL
    topMiddle.addEventListener("click", (event) => {
    if (turnCount % 2 === 1) {
        topMiddle.textContent = "X";
    } else {
        topMiddle.textContent = "O";
    }
    turnCount++;
    })

    // TOP RIGHT CELL
    topRight.addEventListener("click", (event) => {
    if (turnCount % 2 === 1) {
        topRight.textContent = "X";
    } else {
        topRight.textContent = "O";
    }
    turnCount++;
    })

    // MIDDLE LEFT CELL
    middleLeft.addEventListener("click", (event) => {
    if (turnCount % 2 === 1) {
        middleLeft.textContent = "X";
    } else {
        middleLeft.textContent = "O";
    }
    turnCount++;
    })

    // CENTER CELL
    center.addEventListener("click", (event) => {
    if (turnCount % 2 === 1) {
        center.textContent = "X";
    } else {
        center.textContent = "O";
    }
    turnCount++;
    })

    // MIDDLE RIGHT CELL
    middleRight.addEventListener("click", (event) => {
    if (turnCount % 2 === 1) {
        middleRight.textContent = "X";
    } else {
        middleRight.textContent = "O";
    }
    turnCount++;
    })

    // BOTTOM LEFT CELL
    bottomLeft.addEventListener("click", (event) => {
    if (turnCount % 2 === 1) {
        bottomLeft.textContent = "X";
    } else {
        bottomLeft.textContent = "O";
    }
    turnCount++;
    })
    
    // BOTTOM MIDDLE CELL
    bottomMiddle.addEventListener("click", (event) => {
    if (turnCount % 2 === 1) {
        bottomMiddle.textContent = "X";
    } else {
        bottomMiddle.textContent = "O";
    }
    turnCount++;
    })

    // BOTTOM RIGHT CELL
    bottomRight.addEventListener("click", (event) => {
    if (turnCount % 2 === 1) {
        bottomRight.textContent = "X";
    } else {
        bottomRight.textContent = "O";
    }
    turnCount++;
    })

    // CONCLUSION
    if (topRight === "x" && topRight.textContent === topMiddle.textContent && topRight.textContent === topLeft.textContent) {
        console.log("you won");
    }
}*/
    
initApp();








