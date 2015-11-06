function push (array, element) {
  array[array.length] = element;
  return array;
}

function pop (array) {
  var element = array[array.length - 1];
  array.length--;
  return element;
}

function shift (array) {
  if (array.length === 0) return undefined;
  var element = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i]) array[i - 1] = array[i];
  }
  array.length--;
  return element;  
}

function unshift (array, element) {
  array.length++;
  for (var i = array.length - 1; i > 0; i--) {
    array[i] = array[i - 1];
  }
  array[0] = element;
  return array
}

function unique (array) {
  var newArray = [];
  var referenceObj = {};

  for (var i = 0; i < array.length; i++) {
    if (!referenceObj[array[i]]) {
      push(newArray, array[i]);
      referenceObj[array[i]] = 1;
    }
  }
  return newArray;
}

function frequency2 (array) {
  var newString = "";
  var referenceObj = {};
  var count = 0;
  var candidates = [];

  for (var i = 0; i < array.length; i++) {
    newString += array[i];
  }

  for (var i = 0; i < newString.length; i++) {
    var e = newString[i];
      if (!referenceObj[e]) {
      referenceObj[e] = 1;
    } else {
      referenceObj[e]++;
    }
  }

  for (var key in referenceObj) {
    if (referenceObj[key] > count){
      candidates = [key];
      count = referenceObj[key]
    } else if (referenceObj[key] === count) {
      push(candidates, key);
    }
  }
  return candidates[0];
}

exports.pop = pop;
exports.push = push;
exports.shift = shift;
exports.unshift = unshift;
exports.unique = unique;
exports.frequency2 = frequency2;
