Array.prototype.myUniq = function() {
  var uniq = [];
  for(var i = 0; i < this.length; i++){
    var item = this[i];
    if(uniq.indexOf(item) === -1){
      uniq.push(item);
    }
  }
  return uniq;
};

function myUniq(array){
  var uniq = [];
  for(var i = 0; i < array.length; i++){
    var item = array[i];
    if(uniq.indexOf(item) === -1){
      uniq.push(item);
    }
  }
  return uniq;
}

console.log([1, 1, 2, 2, 3, 4, 5, 5].myUniq());

function twoSum(array){
  var result = [];

  for (var i = 0; i < array.length - 1; i++) {
    var num1 = array[i];

    for (var j = i + 1; j < array.length; j++) {
      var num2 = array[j];

      if (num1 + num2 === 0){
        result.push([i, j]);
      }
    }
  }

  return result;
}

// console.log(twoSum([2, -2, 3, 4, 5, -4]));
// console.log(twoSum([-1, 0, 2, -2, 1]));

function transpose(array){
  var transposed = [];

  for (var i = 0; i < array.length; i++) {
    var transRow = [];

    for (var j = 0; j < array.length; j++) {
      transRow.push(array[j][i]);
    }

    transposed.push(transRow);
  }

  return transposed;
}

// console.log(transpose([
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8]
//   ]));
