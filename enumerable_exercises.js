function myEach(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i]);
  }
  return array;
}

var addOne = function(el) {
  console.log(el + 1);
};

 // myEach([1, 2, 3], addOne);

function myMap(array, mappingFunc) {
   var mapped = [];

  //  var mapping = function(el) {
  //    mapped.push(mappingFunc(el));
  //  };

   myEach(array, function(el){
     mapped.push(mappingFunc(el));
   });

   return mapped;
}

var addTwo = function(el) {
  return el + 2;
};

// console.log(myMap([1, 2, 3, 4, 5], addTwo));


function myInject(array, injectFunc) {
  var accum = array[0];

  myEach(array.slice(1), function(el){
    accum = injectFunc(accum, el);
  });

  return accum;
}

var multiplyTwoNumbers = function(a, b) {
  return a * b;
};

console.log(myInject([1, 2, 3, 4], multiplyTwoNumbers));
