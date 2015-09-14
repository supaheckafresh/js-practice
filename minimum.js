function min(a, b) {
  if (a < b)
    return a;
  else
    return b;
}

console.log(min(54, 3));

console.log(min(2, 2.5));

console.log(min(4, 4));

console.log(min(1.3, 1.1));

console.log(min(-9.8, 1.1));

console.log(min(min(2,0), 7));
