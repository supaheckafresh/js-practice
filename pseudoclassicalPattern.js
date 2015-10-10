// using keyword new inserts invisble lines of code at top and bottom of function
// constructor object. Basically shorthand to save us from typing these lines for
// every function constructor.
//
// Regarding the first line - you wouldn't actually be able to assign a value to
// the keyword this, in this way, but the JS interpreter is able to do this for us.
//
//there are some performance optimizations built into the JS engine that only apply
//when you're using the pseudoclassical pattern.

var Car = function(loc) {
  //this = Object.create(Car.prototype);
  this.loc = loc;
  //return this;
};

Car.prototype.move = function() {
  this.loc++;
};

var amy = new Car(8);  // note that we must use 'new' with this type of Constructor.

console.log(amy);
