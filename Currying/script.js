/*let multiply = function (x, y) {
  console.log(x * y);
};*/

let multiplyByTwo = multiply.bind(this, 2, 15); // 2 is x, 15 is y
multiplyByTwo(5);
// bind gives a copy of multiply function.


// Currying using function closures
let mul = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

