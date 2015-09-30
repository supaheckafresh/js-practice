
var testArray = [1, 2, 3];

var testList = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};


function arrayToList(array) {
  var list = null;
  for (var i = array.length -1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}


function arrayToListReverse(array) {
  var list = null;
  for (var i = 0; i < array.length; i++) {
    list = {value: array[i], rest: list};
  }
  return list;
}

console.log(arrayToList(testArray));


function listToArray(list) {
  var array = [];
  for (node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

console.log(listToArray(testList));


function prepend(value, list) {
  return {value: value, rest: list};
}

console.log(prepend(-1, testList));


function nth(list, n) {
  if (!list)
    return undefined;
  else if (n === 0)
    return list.value;
  else
    return nth(list.rest, n - 1);
}

console.log(nth(testList, 0));
console.log(nth(testList, 7));

