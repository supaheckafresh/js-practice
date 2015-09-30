function range(start, end) {
  rangeArray = [];
  for (var i = start; i <= end; i++) {
    rangeArray.push(i);
  }
  return rangeArray;
}

console.log(range(1, 10));

console.log(range(200, 300));
