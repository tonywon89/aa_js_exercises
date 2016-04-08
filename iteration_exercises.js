var bubbleSort = function(array) {

  var sorted = false;

  while (!sorted) {
    sorted = true;

    for (var i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        var temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        sorted = false;
      }
    }
  }

  return array;
};

// console.log(bubbleSort([4,2,6,1,5]));

// var substrings = function(str)
