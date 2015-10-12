var Car = function() {
  this.loc = loc;
};

Car.prototype.move = function(){
  this.loc++;
};

var Van = function(loc) {
  Car.call(this, loc);
};

Van.prototype = Object.create(Car.prototype); //delegate failed lookups to
//Car.prototype in the correct way.
Van.prototype.constructor = Van; //got lost when we created new Object above.
//if we don't add the above line of code, Car would show as the constructor for
//any Van instances. Every .prototype object has a .constructor property
//automatically.
Van.prototype.grab = function() {
  /*     */
};

var Cop = function(loc) {
  Car.call(this, loc);
};

