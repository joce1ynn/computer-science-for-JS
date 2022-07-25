const Benchmark = require("benchmark");
// const { linearSearch, binarySearch } = require("./search");

// const numbers = [];
// for (let i = 1; i <= 4000000; i++) {
//   // populate the array with the numbers 1 to 1,000,000
//   numbers.push(i);
// }

// // grab the last number in the array as the number we want to find
// const target = numbers[numbers.length - 1];
// // const target = numbers[0];

// const suite = new Benchmark.Suite();

// suite
//   .add("linear search", function () {
//     linearSearch(numbers, target);
//   })
//   .add("binary search", function () {
//     binarySearch(numbers, target, 0, numbers.length - 1);
//   })
//   // print the test's name and average time in milliseconds
//   .on("complete", function () {
//     // console.log(this);

//     // print the test's name and average time in milliseconds
//     // console.log(`${this[0].name} averaged ${this[0].stats.mean*1000} milliseconds.`);

//     // loop over and print each result
//     this.forEach((result) =>
//       console.log(
//         `${result.name} averaged ${result.stats.mean * 1000} milliseconds.`
//       )
//     );
//   })
//   .run();

const { bubbleSort } = require("./sort");

const numbers = [];
// random array from 1 to 100001
for (let i = 0; i < 10000; i++) {
  numbers.push(Math.floor(Math.random() * 10000) + 1);
}

const suite = new Benchmark.Suite();

suite
  .add("bubble sort", function () {
    //need to make a new copy of the array (testArray) for each test,
    //or else we'll end up simply running a benchmark on a sorted array after the first test with numbers finishes.
    const testArray = [...numbers];
    bubbleSort(testArray);
  })
  .on("complete", function () {
    this.forEach((result) =>
      console.log(
        `${result.name} averaged ${result.stats.mean * 1000} milliseconds.`
      )
    );
  })
  .run();
