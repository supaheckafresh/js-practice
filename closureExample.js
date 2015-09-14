function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

var double = multiplier(2);
console.log(double(24));
