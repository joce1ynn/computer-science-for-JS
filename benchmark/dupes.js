const numbers = [
  41, 24, 28, 1, 40, 41, 32, 33, 50, 5, 34, 5, 21, 21, 43, 43, 21, 4, 49, 24,
];

const mostDuplicates = (arr) => {
  // create variables for most appearing value and count
  let mostValue;
  let mostCount = 0;

  // loop over array (i)
  for (let i = 0; i < arr.length; i++) {
    // start a counter for number of occurences
    let counter = 0;

    //loop over array(j)
    for (let j = 0; j < arr.length; j++) {
      // compare indexes
      if (arr[i] === arr[j]) {
        // if same, increase counter
        counter++;
      }
    }

    // if counter > current most appearing count, update most vount/value to match
    if (counter > mostCount) {
      mostCount = counter;
      mostValue = arr[i];
    }
  }

  return `${mostValue} appeared ${mostCount} times`;
};

const duplicates = function (arr) {
  // creat a new object to store the duplicates
  let obj = {};
  // loop over the array (i)
  for (let i = 0; i < arr.length; i++) {
    // if the element is not in the object, the frequency is 1
    let value = arr[i];
    if (!obj[value]) {
      obj[value] = 1;
    }
    // if it's in the object, the frequency +1
    else {
      obj[value]++;
    }
  }

  // create variables for most value and count
  let mostValue;
  let mostCount = 0;

  // loop over object key/values
  for (const value in obj) {
    // if value > current count, update most value/count to match
    if (obj[value] > mostCount) {
      mostCount = obj[value];
      mostValue = value;
    }
  }

  // return the object
  return `${mostValue} appeard ${mostCount} times`;
};

console.log(duplicates(numbers));

module.exports = { mostDuplicates, duplicates };
