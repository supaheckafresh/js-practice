//prototypal pattern for creating objects. failed property lookups for instances
//get delegated to Car.methods, so those instances will appear to have all of the
//methods like 'move' and so forth. Bypasses costly step of copying properties over
//to each new object every time we build a new object.

var Car = function(loc) {
  var obj = Object.create( Car.methods );
  obj.loc = loc;
  return obj;
};

Car.methods = {
  move : function() {
    this.loc++;
  },

  somethingElse : function() {
    return boom();
  }
};

//Whenever a function is created, it contains an object attached to it that you
//can use as a container for methods. While 'methods' might have been an appropriate
//name choice, it is actually called 'prototype'. This is so you can add methods
//to that function just in case you decide to use it to build instances. JS provides
//this prototype object for us, but there's really nothing special about it that
//will influence the way our code runs... it's just a place to store methods (so
//that we don't have to create our own object container as a global variable). It's
//just a place to store things and has no other special properties.
// So... Car.methods above could be refactored to:

Car.prototype.move = function() {
  this.loc++;
};
//At this point, we would also need to change line 7 to
//  var obj = Object.create( Car.prototype );
