var Car = function(loc) {
  var obj = Object.create( Car.prototype );
  obj.loc = loc;
  return obj;
};

Car.prototype.move = function(){
  this.loc++;
};

console.log(Car.prototype.constructor); // this is actually Car itself.
console.log(Car.prototype);

var amy = Car(8);

console.log(amy.constructor); // this lookup gets delegated to Car.prototype, which
//does have a 'constructor' property.

console.log(amy instanceof(Car));
