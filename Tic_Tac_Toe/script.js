let board = Array(9).fill(null);
let currentPlayer = 'X';
const boardDiv = document.getElementById('board');
const status = document.getElementById('status');

function renderBoard() {
    boardDiv.innerHTML = '';
    board.forEach((cell, i) => {
        const cellDiv = document.createElement('div');
        cellDiv.className = 'cell';
        cellDiv.textContent = cell;
        cellDiv.onclick = () => makeMove(i);
        boardDiv.appendChild(cellDiv);
    });
}

function makeMove(i) {
    if (!board[i] && !checkWinner()) {
        board[i] = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        renderBoard();
        const winner = checkWinner();
        if (winner) status.textContent = winner + ' wins!';
        else if (!board.includes(null)) status.textContent = 'Draw!';
    }
}

function checkWinner() {
    const wins = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];
    for (let [a,b,c] of wins) {
        if (board[a] && board[a] === board[b] && board[a] === board[c]) return board[a];
    }
    return null;
}

function resetGame() {
    board = Array(9).fill(null);
    currentPlayer = 'X';
    status.textContent = '';
    renderBoard();
}

renderBoard();