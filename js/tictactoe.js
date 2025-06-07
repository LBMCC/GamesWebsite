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

const cell = document.querySelectorAll(".cell");
let isPlayerTurn;
let playerSymbol = "";
let cpuSymbol = "";
console.log(cell);
let turnCount = 1;
let turnOrder;


const initApp = async () => {
    turnOrder = await playerOrder();
    console.log();
    gameFlow();
}

const playerOrder = () => {
    return new Promise((resolved) => {
        const order = document.querySelectorAll(".btn_order");
        console.log(order);
        order.forEach(element => {
            element.addEventListener("click", (event) => {
            let player;
            let cpu;
            if (element.textContent === "Go first") {
                player = 1;
                //cpu = 2;
            } else if (element.textContent === "Go second") {
                player = 2;
                //cpu = 1;
            } else {
                player = Math.floor(Math.random() * (2 - 0) + 1);
                //cpu = player > 1 ? 1 : 2;
            }
            resolved (player);
        });
    })
})
}


const gameFlow = () => {
    isPlayerTurn = turnOrder === 1 ? true : false;
    playerSymbol = turnOrder === 1 ? "X" : "O";
    cpuSymbol = turnOrder === 2 ? "X" : "O";
    if (!isPlayerTurn){
            setTimeout (
                cpuTurn, 500
            )
        }
    cell.forEach(element => {
        element.removeEventListener("click", handleClick);
        element.addEventListener("click", handleClick);
        function handleClick(event) {
            if (element.textContent === "" && isPlayerTurn) {
                    element.textContent = playerSymbol;
                    checkWin();
                    isPlayerTurn = false;
                    setTimeout (
                        cpuTurn, 1000
                    )
            } else {  
                return;  //return here only exits out of that single click, it doesn't exit outside of the entire gameFlow function
            }  
        }
    });
}

const cpuTurn = () => {
    const emptyCells = Array.from(cell).filter((element) => element.textContent === "");  //Array.from creates an array instance from an iterable or array-like object
    console.log(emptyCells);
    if (emptyCells.length === 0) {
        resetGame();
        return;
    } else {
        const randomIndex = Math.floor(Math.random() * emptyCells.length);
        const chosenCell = emptyCells[randomIndex];
        chosenCell.textContent = cpuSymbol;
        checkWin();
        isPlayerTurn = true;
    }
}

const checkWin = () => {
    return combinations.some(([a, b, c]) => {  //Array.some instances tests whether at least one of its elements passes a test implemented by the function
        if (cell[a].textContent === "X" &&
            cell[b].textContent === "X" &&
            cell[c].textContent === "X") {
                if (isPlayerTurn) {
                    playerWin();
                } else {
                    cpuWin();
                }
                resetGame();
                return true;  //returns true if it finds the element
            }
        if (cell[a].textContent === "O" &&
            cell[b].textContent === "O" &&
            cell[c].textContent === "O") {
                if (isPlayerTurn) {
                    playerWin();
                } else {
                    cpuWin();
                }
                resetGame();
                return true;  //returns true if it finds the element
            }
        return false;  //returns false if it doesn't
    })
}

const playerWin = () => {
    const winMessage = document.getElementById("winMessage");
    winMessage.textContent = "Player WINS!";
    let score = document.getElementById("playerScore");
    score.textContent ++;
}

const cpuWin = () => {
    const winMessage = document.getElementById("winMessage");
    winMessage.textContent = "CPU WINS!";
    let score = document.getElementById("cpuScore");
    score.textContent ++;
}

const resetGame = () => {
    turnCount = 1;
    cell.forEach(element => {
        element.textContent = "";
    })
    gameFlow();  //fix bug where game doesn't respect original turn order after reset
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

