const bubbleSort = (arr) => {
  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < arr.length - 1; i++) {
      // compare arr[i] to arr[i+1]
      if (arr[i] > arr[i + 1]) {
        // swap using a third temp variable
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        // if swapped, set sorted = false to run while loop again
        sorted = false;
      }
    }
  }

  return arr;
};

module.exports = { bubbleSort };
