var myObj = {
colors : ['red', 'blue', 'orange'],
name: 'moooj'
};

myObj.doStuff = function(num1, num2) {
  this.nThat = this;
  this.colors[3] = 'whaaaat?';
  this.values = [num2, num1, this];
  console.log(this);
  console.log(this.nThat);
};

//myObj.doStuff(1, 2);



//example to specifying what we want 'this' to bind to  with .call to override
//default binding to global, and override left of dot rule. Pass in 1 extra value
//at beginning of argument list, which will be the object 'this' gets bound to
var someObj = {
  big: 'little',
  values: []
};

function myBalls(b, c, d) {
  console.log('Previously: ' + b, c, d, this);
  this.test = "fidgit";
  this.values.push(b, c, d);
  console.log('Currently: ' + b, c, d, this);
}

myBalls.call(someObj, 4, 5, "six");
