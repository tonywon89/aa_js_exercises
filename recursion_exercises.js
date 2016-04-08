var range = function(start, end) {
  if (end <= start) {
    return [];
  } else {
    return [start].concat(range(start + 1, end));
  }
};

// console.log(range(1, 10));

var sumArray = function(array) {
  if (array.length === 0) {
    return 0;
  } else {
    return array[0] + sumArray(array.slice(1));
  }

};

// console.log(sumArray([1, 2, 3, 4, 5]));

var expRecursion = function(base, power) {
  if (power === 0){
    return 1;
  } else {
    return base * expRecursion(base, power - 1);
  }
};

// console.log(expRecursion(2, 3));

var expRecursion2 = function(base, n) {
  if (n === 0){
    return 1;
  } else if (n % 2 === 0) {
    var even = expRecursion2(base, n / 2);
    return even * even;
  } else {
    var odd = (expRecursion2(base, (n - 1) / 2));
    return base * odd * odd;
  }
};

// console.log(expRecursion2(2, 3));
// console.log(expRecursion2(2, 4));

var bsearch = function(array, target) {
  if (array.length === 0) {
    return null;
  }

  var middleIndex = Math.floor(array.length / 2);

  if (target === array[middleIndex]) {
    return middleIndex;

  } else if (target < array[middleIndex]) {
    var left = array.slice(0, middleIndex);
    return bsearch(left, target);

  } else {
    var right = array.slice(middleIndex + 1, array.length);
    var rightBsearch = bsearch(right, target);
    if (rightBsearch !== null) {
      return rightBsearch + middleIndex + 1;
    } else {
      return null;
    }
  }
};

// console.log(bsearch([1, 2, 3], 1));
// console.log(bsearch([2, 3, 4, 5], 3));
// console.log(bsearch([2, 4, 6, 8, 10], 6));
// console.log(bsearch([1, 3, 4, 5, 9], 5));
// console.log(bsearch([1, 2, 3, 4, 5, 6], 6));
// console.log(bsearch([1, 2, 3, 4, 5, 6], 0));
// console.log(bsearch([1, 2, 3, 4, 5, 7], 6));

var mergeSort = function(array) {
  if (array.length <= 1) {
    return array;
  } else {
    var middleIndex = Math.floor(array.length / 2);
    var left = array.slice(0, middleIndex);
    var right = array.slice(middleIndex, array.length);

    return merge(mergeSort(left), mergeSort(right));
  }
};

var merge = function(left, right) {
  var merged = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }

  return merged.concat(left).concat(right);

};

console.log(mergeSort([2, 5, 4, 3, 7, 6]));
