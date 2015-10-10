var kiera = {
  age : 1,
  gender : 'female',
  status : 'funny'
};

//var kiera_2 = extend({}, kiera);  //<-- would need to create extend or use
//helper function!

var kiera_2 = Object.create(kiera);

log(kiera_2.age);
log(kiera_2.status);
log(kiera_2);  // notice kiera_2 doesn't directly hold any of the properties,
//but console logging age or status goes up the chain to the prototype object.

kiera_2.hungry = 'yes';
log(kiera_2);


kiera.hair = 'dark';
log(kiera_2.hair);
log(kiera_2);  // will log dark, since prototyping chain is not just one-time.

log(kiera_2.toString());   // delegates to higher level object Prototype.
log(kiera_2.constructor);

function log(stuff) {
  console.log(stuff);
}
