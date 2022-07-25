// #1: Code Execution Process
const num = 3;
function addTwo(int) {
  const sum = int + 2;
  return sum;
}

const output = addTwo(num);

// #2: Inner Functions
function answer() {
  console.log("Hello world");
  function response() {
    console.log("Are you listening?");
    return;
  }

  console.log("I like bananas");
  response();
}

console.log("Good Morning");
answer();

// #3. Use the setTimeout Web API
function sayHello() {
  setTimeout(() => console.log("Hello world"), 1000);
  function sayGoodbye() {
    console.log("See ya");
  }

  console.log("Good Morning");
  sayGoodbye();
}

sayHello();

// #4: Asynchronous JavaScript
function foo() {
  setTimeout(() => {
    console.log("bar");
  }, 0);

  console.log("foo");
  console.log("baz");
}

foo();

//   Although the anonymous callback function is ready to execute,
// the event loop must first check the call stack to see if there are any more tasks to run.
// Once the call stack has finished evaluating all the code that is available and becomes idle,
//  the event loop allows the callback function to push onto the call stack,

// #5: a closure is a function that contains references to its surrounding state.
function counter() {
  let count = 0;
  return function () {
    return count++;
  };
}

const increment = counter();
increment(); //=> 0

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i++);
  }, 1000);
} // => 5 6 7 8 9

console.log(i); //=> 5

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i++);
  }, 1000);
} //=> 0 1 2 3 4

for (var i = 0; i < 5; i++) {
  (function (x) {
    setTimeout(function () {
      console.log(x++);
    }, 1000);
  })(i);
}

console.log(i); //=> 5 0 1 2 3 4

// #6: factory function
class Tiger {
  constructor() {
    this.noise = "roar";
  }
  sound() {
    console.log(this.noise);
  }
}

const simba = new Tiger();
simba.sound(); //=> "roar"

const tiger = function () {
  const noise = "roar";
  return {
    sound: function () {
      console.log(noise);
    },
  };
};

const tigger = tiger();
tigger.sound(); //=> "roar"

// Inheritance is when you design your types based on what they are,
// Composition is when you design your types based on what they can do.

// #7. lose "this" context
const robot = {
  name: "rumba",
  clean() {
    alert(`${this.name} is now cleaning`);
  },
};

// arrow function binds this to the parent scope instead of referencing the <button> element.
const clickHandler1 = () => {
  this.textContent = "Clicked!";
};

// wont lose this
const clickHandler2 = function () {
  this.textContent = "Clicked!";
};

buttonEl.addEventListener("click", robot.clean);

// #8. constructor
function User(first, last) {
  this.first = first;
  this.last = last;
}

var user1 = new User("Braden", "Rogers");
var user2 = new User("Wenwen", "Tian");

// #9. binary search code example
const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];

const binarySearch = (arr, num) => {
  let left = 0;
  let right = arr.length - 1;
  //The Math.floor() function returns the largest integer less than or equal to a given number.
  let middle = Math.floor((left + right) / 2);

  // range overlapped, so never found number
  if (left > right) {
    return -1;
  } else if (num === arr[middle]) {
    return middle;
  } else if (num < arr[middle]) {
    // call again with a new right value
    right = middle - 1;
    return binarySearch(arr, num);
  } else if (num > arr[middle]) {
    // call again with a new left value
    left = middle + 1;
    return binarySearch(arr, num);
  }
};

console.log(binarySearch(data, 38)); // bring right down to 4

// #10. bubble sort
const numbers = [
  54, 8, 87, 88, 100, 98, 17, 72, 67, 42, 40, 34, 55, 18, 33, 94, 59, 68, 92, 2,
];

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
