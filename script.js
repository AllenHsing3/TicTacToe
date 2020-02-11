let board;
const squares = Array.from(document.querySelectorAll('#board div'))
let turn = "X"
document.getElementById('board').addEventListener('click', handleTurn)
function start(){
    board = [
        "","","",
        "","","",
        "","",""
    ];
marker()
}

start()

function marker(){
    board.forEach(function(mark, index){
        squares[index].textContent= mark;
    })
}   

function handleTurn(event){
    let idx = squares.findIndex(function(square){
        return square === event.target;
    });
    board[idx] = turn;
    turn = turn == "X" ? "O" : "X";
    marker()
}
