// Calculator variables
const values = ['0', '0'];
var op = document.querySelector('.ops');
let num = document.querySelector('.nums');
let display = document.querySelector("#InnerDisplay");
let count = 0;

//Retrieve values for variables
num.addEventListener('click', (E) => {
  num = E.target;
  display.textContent += num.innerHTML;
  });

  op.addEventListener('click', (e) => {
    values[count] = parseFloat(display.innerHTML)
    console.log(values[count])
    count += 1;
    if(count > 1){
      count = 0
    }
    console.log(count)
    op = e.target
    let opr = op.innerHTML
    console.log(opr)
    display.textContent = null
   console.log(values)

  })

  
  
  



    // if(values[1] != '0'){
    // display.textContent = values.reduce((total, currentItem) => {
    //   return operate(opr, parseFloat(currentItem), parseFloat(total))
    // })}


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
  else if (op == '%'){
    return num1 % num2;
  }
  else if (op == 'sqrt'){
    return Math.sqrt(num1, num2);
  }
  else if (op == 'C'){
    return 
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