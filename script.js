var player1point = "0";
var player2point = "1";
var gamepad = document.getElementsByClassName("game-pad");
var turn = 0;
var board = [
  ['','',''],
  ['','',''],
  ['','','']  
];
function playerEndGame() {
  if (turn%2 == 0) {
    $("#log").text("Player1 Wins");
  } else {
    $("#log").text("Player2 Wins");
  }
  $(".overlay").css("z-index","1");
}
function isARow() {
  for (var i = 0 ; i < 3; i++){
    if (board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][0] != "") {
      return true;
    }
  } 
}
function isAColum() {
  for (var i = 0 ; i < 3; i++){
    if (board[0][i] == board[1][i] && board[1][i] == board[2][i] && board[0][i] != "") {
      return true;
    }
  } 
}
function isADiagonals() {
  if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != "") {
    return true;
  }
  if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[1][1] != "") {
    return true;
  }
}
function checkPlayerWin() {
  if (isARow() || isAColum() || isADiagonals()) {  
    playerEndGame(); 
  } else {
    if (turn == 8){ 
      $("#log").text ("Tie");
    }
  } 
} 
$(".game-pad").click(function() {
  var x = Math.floor(this.id/3); 
  var y = this.id%3;
  if (board[x][y] != "") return;
  $(this).prop('disabled', true);    
  if (turn % 2 === 0) {
    $(this).text("O");
    board[x][y] = player1point; 
    $("#log").text("Player2 click a box");
    checkPlayerWin();
  } else {
    $(this).text("X");
    board[x][y] = player2point;
    $("#log").text("Player1 click a box");
    checkPlayerWin();      
  }
  turn ++;
});
$(".restart-btn").click(function() {
  turn = 0;
  board = [
   ['','',''],
   ['','',''],
   ['','','']  
  ]; 
  $(".game-pad").text("");
  $("#log").text("Player1 click a box");
  $(".overlay").css("z-index","0");
});
