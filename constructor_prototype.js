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
// console.log(cat.meow());
var cat2 = new Cat("hi", "bye");

var boundMeow = cat.__proto__.meow.bind(cat2);
// console.log(boundMeow());

var hello = [1, 2, 3];

var obj = {
  hello: function() {
    return "Puuurrrrrr";
  },
  bye: "Bye"
};

obj[[1, 2, 3]] = "Hello";
obj.bye = "Bye Bye ";
obj["bye"] += "Bye bye bye";

console.log(obj["bye"]);
