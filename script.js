let board;
const squares = Array.from(document.getElementsByClassName('square'))
const messages = document.querySelector('h2')
let turn = "X"
let win;
document.getElementById('board').addEventListener('click', handleTurn)
document.getElementById('reset-button').addEventListener('click', start)
//need to fix score board
let scoreOne = document.getElementById('scoreOne')
let scoreTwo = document.getElementById('scoreTwo')
playerXWins = 0
playerOWins = 0
//  if(winner == "X"){
//   scoreOne.textContent = playerXWins++}

//intializer
start()
function start(){
    board = [
        "","","",
        "","","",
        "","",""
    ];
    marker();
}

function marker(){
    board.forEach(function(mark, index){
             squares[index].textContent = mark; 
    });
    messages.textContent = win === "T"? `It is a tie!`: win ? `${win} wins!` : `It is ${turn}'s turn`;
   // if(messages.textContent === "X" || "O"){
   //     document.getElementById('board').removeEventListener('click', handleTurn)
   // }
    
}   

function handleTurn(event){
    let idx = squares.findIndex(function(square){
        return square === event.target;
    });
    if (board[idx]=== ""){
        board[idx] = turn;
        turn = turn == "X" ? "O" : "X";
        win = getWinner()
        marker()
    }else marker()
}

let winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

function getWinner(){
    let winner = null
    winningCombos.forEach(function(combo, index){
        if(board[combo[0]] && board[combo[0]] == board[combo[1]] && board[combo[0]] == board[combo[2]] && board[combo[0]])
        winner = board[combo[0]];
        if(winner !== null){
        
        }

    })
    return winner ? winner : board.includes("") ? null : "T";
}
