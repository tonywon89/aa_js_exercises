var Cat = function(name, owner) {
  this.name = name;
  this.owner = owner;
};

Cat.prototype.cuteStatement = function(){
  return this.owner + " loves " + this.name;
};

Cat.prototype.cuteStatement = function(){
  return "Everyone loves " + this.name;
};

Cat.prototype.meow = function(){
  return this.name + " goes meow!";
};

var cat = new Cat("Whisker", "Bob");

cat.meow = function() {
  return this.name + " meows loudly";
};

// console.log(cat.cuteStatement());
console.log(cat.meow());
var cat2 = new Cat("hi", "bye");

var boundMeow = cat.__proto__.meow.bind(cat2);
console.log(boundMeow());
