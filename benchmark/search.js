const linearSearch = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }

  return -1;
};

const binarySearch = (arr, num, left, right) => {
  let middle = Math.floor((left + right) / 2);

  if (left > right) {
    return -1;
  } else if (num === arr[middle]) {
    return middle;
  } else if (num < arr[middle]) {
    return binarySearch(arr, num, left, middle - 1);
  } else {
    return binarySearch(arr, num, middle + 1, right);
  }
};

function binarySearch2(arr, num) {
  var left = 0;
  var right = arr.length - 1;
  var middle = Math.floor((left + right) / 2);

  while (num !== arr[middle] && left < right) {
    if (num < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
    middle = Math.floor((left + right) / 2);
  }
  if (num === arr[middle]) return middle;
  else return -1;
}

function indexSearch(arr, num) {
  return arr.indexOf(num);
}

module.exports = { linearSearch, binarySearch, binarySearch2, indexSearch };
