// Inheritance is when you design your types based on what they are,
// Composition is when you design your types based on what they can do.

// ----------------------method 1-------------------
// const buttonEl = document.getElementById("my-button");
// const clickHandler = function () {
//   let count = parseInt(this.getAttribute("data-count"));
//   count++;

//   this.setAttribute("data-count", count);
//   this.textContent = `Clicks: ${count}`;
// };
// buttonEl.addEventListener("click", clickHandler());

// -----------------method 2 with closure-----------------
// 通过以这种方式依赖闭包，我们还能够最大限度地减少与 DOM 的交互量。不再需要读取和写入 HTML 属性。
const buttonEl = document.getElementById("my-button");
const clickHandler = function () {
  let count = 0;

  return function () {
    count++;
    this.textContent = `Clicks: ${count}`;
  };
};
buttonEl.addEventListener("click", clickHandler());

// 闭包方法的另一个好处是，当您向页面添加更多按钮时，您不会使用其他变量污染全局命名空间。
const buttons = document.getElementsByTagName("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", clickHandler());
}

// const containerEl = document.getElementById('container');

// const clickHandler = function(event) {
//   if (event.target.matches('button')) {
//     event.target.textContent = 'Clicked!';
//   }
// };

// containerEl.addEventListener('click', clickHandler);
