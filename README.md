# Computer Science for JavaScript

Module 17-Computer Science for JavaScript

## 1. JavaScript's Data Structures

- The stack and queue are considered linear data structures because they have a logical beginning and end.
- A heap is a two-dimensional structure with a hierarchical organization.

### 1.1 Stack

- The stack used in JavaScript is called the call stack.
- The call stack is where JavaScript executes and evaluates the code.
- Last In, First Out—or LIFO: The last item added onto the stack is also the first item to be removed.
  - push: adds an element from the end of the array
  - pop: removes an element from the end of the array

### 1.2 Queue

- The queue used in JavaScript is named the callback queue.
- The callback queue and the event loop enable JavaScript to handle asynchronous functions.
- First In, First Out—or FIFO
  - push: adds elements to the array to the end.
  - shift: removes items from the front of the array,

### 1.3 Heap

- The heap used in JavaScript is called the memory heap.
- The memory heap is where data is stored.

### 1.4 Closures

Closure is "when you have a function defined inside of another function, that inner function has access to the variables and scope of the outer function even if the outer function finishes executing and those variables are no longer accessible outside of that function."

Benefits:

- Prevent polluting the global namespace that can cause collisions due to name conflicts
- Accidental modifications of global variables
- Performance gains when accessing local variables vs. lookups on the global scope

### 1.5 Factory functions

A factory function is a function that returns a new object.


### 1.6 Constructors functions
The constructor is a special method of a class for creating and initializing an object instance of that class.

In a constructor function this does not have a value. It is a substitute for the new object. The value of this will become the new object when a new object is created.