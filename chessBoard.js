var chessBoard = function(size) {

  var board = "";

  for (var y = 0; y < size; y++) {
    for (var x = 0; x < size; x++) {
      if ((x+y) % 2 === 0)
        board += " ";
      else
        board += "#";
    }
    board += "\n";
  }
  console.log(board);
};

chessBoard(8);
