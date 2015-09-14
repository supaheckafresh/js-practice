var fizzBuzz = function() {
  for (var x = 1; x <= 100; x++) {
    if (x % 3 === 0 && x % 5 === 0) {
      console.log("FizzBuzz");
      continue;
    }
    if (x % 3 === 0) {
      console.log("Fizz");
      continue;
    }
    if (x % 5 === 0 && x % 3 !== 0) {
      console.log("Buzz");
      continue;
    }
    else
      console.log(x);
  }
};

fizzBuzz();

/*
solution:

for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0)
    output += "Fizz";
  if (n % 5 == 0)
    output += "Buzz";
  console.log(output || n);
}
 */
