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
