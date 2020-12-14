const M = 10;
const N = 10;
const board = [];

// Получить случайное число: 1 или 0
function getRandomNum() {
    return Math.round(Math.random());
}

// Инициализация случайного начального состояния доски
function getStartingState(M, N) {
    for (let i = 0; i < M; i++) {
        board.push([]);
        for (let j = 0; j < N; j++) {
            board[i].push(getRandomNum())
        }
    }
}

// Изменение доски
function changeBoard(board) {
    const newBoard = [];
    for (let i = 0; i < M; i++) {
        newBoard.push([]);
        for (let j = 0; j < N; j++) {
            const liveNeighbors = countLiveNeighbors(i, j, board);
            if (board[i][j] === 1) {
                if (liveNeighbors === 2 || liveNeighbors === 3) {
                    newBoard[i].push(1);
                } else {
                    newBoard[i].push(0);
                }
            } else {
                if (liveNeighbors === 3) {
                    newBoard[i].push(1);
                } else {
                    newBoard[i].push(0);
                }
            }
        }
    }
    console.log(newBoard);
    setTimeout(changeBoard, 1000, newBoard);
}

function countLiveNeighbors(i, j, board) {
    let cnt = 0;
    const minRow = (i === 0) ? i : i - 1;
    const maxRow = (i === M - 1) ? i : i + 1;
    const minColumn = (j === 0) ? j : j - 1;
    const maxColumn =  (j === N - 1) ? j : j + 1;
    for (let v = minRow; v <= maxRow; v++) {
        for (let k = minColumn; k <= maxColumn; k++) {
            cnt += board[v][k];
        }
    }
    return cnt - board[i][j];
}

getStartingState(M, N)

console.log(board);

changeBoard(board);
