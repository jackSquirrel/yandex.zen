// КОНСТАНТЫ
// Импорт модулей
const { initialState } = require('./initialBoard');
const readline = require('readline');

// Размеры доски
const M = 10;
const N = 15;

// Определение интерфейса стандартных потоков ввода/вывода
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// ФУНКЦИИ
// Функция получения случайного числа: 1 или 0
function getRandomNum() {
    return Math.round(Math.random());
}

// Функция инициализация случайного начального состояния доски
function getStartingState(M, N) {
    const board = [];
    for (let i = 0; i < M; i++) {
        board.push([]);
        for (let j = 0; j < N; j++) {
            board[i].push(getRandomNum())
        }
    }
    return board;
}

// Рекурсивная функция для изменения состояния доски
function changeBoard(board) {
    const M = board.length;
    const N = board[0].length;
    const newBoard = [];
    for (let i = 0; i < M; i++) {
        newBoard.push([]);
        for (let j = 0; j < N; j++) {
            const liveNeighbors = countLiveNeighbors(i, j, board, M, N);
            rulesOfTheGame(board[i][j], newBoard, liveNeighbors, i);
        }
    }
    console.log(newBoard);
    console.log();
    setTimeout(changeBoard, 1000, newBoard);
}

// Функция, реализующая правила игры
function rulesOfTheGame(isCellAlive, newBoard, liveNeighbors, i) {
    if (isCellAlive === 1) {
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

// Функция подсчета количества "живых" соседей
function countLiveNeighbors(i, j, board, M, N) {
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

// Взаимодействие с пользователем и вызов функций
rl.question("Type 1, if you want to take initial state of the board from .js file\nType 2, if you want to create a random board \n", function(answer) {
    const board = (answer === '1') ? initialState : ((answer === '2') ? getStartingState(M, N) : null);
    if (board === null) {
        console.log('Sorry, you printed something wrong :(');
        rl.close();
        return 0;
    } 
    console.log('Initial board:');
    console.log(board);
    console.log('New states:');
    changeBoard(board);
    rl.close();
});
