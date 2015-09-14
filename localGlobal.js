var x = "global-outside";
console.log("global: " + x);

var f1 = function(){
  var x = "local-f1";
  console.log("inside f1: " + x);
};

f1();
console.log("outside f1: " + x);

var f2 = function(){
  x = "local-f2";
  console.log("inside f2: " + x);
};

f2();
console.log("outside f2: " + x);
