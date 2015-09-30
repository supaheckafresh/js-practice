var originalArray = [1, 2, 3, 4, 7];

function reverseArray(array) {
  var rev = [];
  for (var i = array.length-1; i >= 0; i--) {
    rev.push(array[i]);
  }
  return rev;
}

var test = reverseArray(originalArray);
console.log(test);
console.log(originalArray);


function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    var temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
  return array;
}

var test2 = reverseArrayInPlace(originalArray);
console.log(test2);
console.log(originalArray);
