let board;
const squares = Array.from(document.querySelectorAll('#board div'))


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