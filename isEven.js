function isEven(number) {
  if (number < 0)
    number *= (-1);
  if (number === 0)
    return true;
  if (number === 1)
    return false;
  else
    return isEven(number - 2);
}

console.log(isEven(48));
console.log(isEven(137));
console.log(isEven(-8));
