
var charTriangle = function(character, lines) {
  var str = "";
  for (var line = 0; line < lines; line++) {
    str += character;
    console.log(str);
  }
};

charTriangle("#", 7);


/*
solution:
for (var line = "#"; line.length < 8; line += "#")
  console.log(line);
 */
