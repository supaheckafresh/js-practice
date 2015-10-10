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
//name choice, it is actually called 'prototype'.
