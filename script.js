const M = 10;
const N = 10;
const board = [];

function getRandomNum() {
    return Math.round(Math.random());
}

function getStartingState(M, N) {
    for (let i = 0; i < M; i++) {
        board.push([]);
        for (let j = 0; j < N; j++) {
            board[i].push(getRandomNum())
        }
    }
}

getStartingState(M, N)

console.log(board);