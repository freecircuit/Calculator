// Calculator variables
var num1 = a
var op = b
var num2 = c
const solution = operate(op, num1, num2)

//The operate function:
const operate = function (op, num1, num2) {
  if (op === '+'){
    const num = add(num1, num2);
    return num;
  }
  else if (op === '-'){
    const num = subtract(num1, num2);
    return num;
  }
  else if (op === '*'){
    const num = multiply(num1, num2);
    return num;
  }
  else if (op === '/'){
    const num = divide(num1, num2);
    return num;
  }
  else if (op === '^'){
    const num = power(num1, num2);
    return num;
  }
}

//Operator functions:
const add = function (a, b) {
    return a + b;
  };
  
  const subtract = function (a, b) {
    return a - b;
  };

  const multiply = function (a, b) {
    return a * b;
  }

  const divide = function (a, b) {
    return a / b;
  }

  const power = function (a, b) {
    return Math.pow(a, b);
  }