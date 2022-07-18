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
