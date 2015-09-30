function range(start, end, stepSize) {
  rangeArray = [];
  if (start < end) {
    for (var i = start; i <= end; i += stepSize || 1) {
      rangeArray.push(i);
    }
  } else {
    for (var d = start; d >= end; d += stepSize || -1) {
      rangeArray.push(d);
    }
  }
  return rangeArray;
}

function sum(range) {
  var sumOfArrayVals = 0;
  for (var i = 0; i < range.length; i++) {
    sumOfArrayVals += range[i];
  }
  return sumOfArrayVals;
}

console.log(sum(range(1,10, 2)));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
