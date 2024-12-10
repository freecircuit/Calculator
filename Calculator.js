// Calculator variables
const values = [];
var op = document.querySelectorAll('.op');
let num = document.querySelectorAll('.num');
let display = document.querySelector("#InnerDisplay");
let equal = document.querySelector('#equal')
let count = 1;
let opp = {rator: null}
const temp = {temp: null}
let answer = 0;
let string = '';
let click = 0;

//Retrieve values for variables
document.querySelectorAll(".num").forEach(item => {
  item.addEventListener('click', (e) => {
    if (click == 0){
      display.textContent = null
    }
    click += 1;
    if (click > 0){
    display.textContent += e.target.innerHTML;}

    string += e.target.innerHTML
  }
  )
  
});

  //Assign operator to a variable and use the click event as to begin next number    
  document.querySelectorAll('.op').forEach(item => {
      item.addEventListener('click', (e) => {
        if(display.textContent == null){
          return;
        }
        temp.temp = opp.rator
        console.log(temp.temp)
        values[count] = parseFloat(string.valueOf())
        opp.rator = e.target.innerHTML
        if(count < 2){
          values[0] = values[1]
        } 

        count += 1;
         
        if(count > 2){
        answer = operate(temp.temp, values[0], values[2]);
        values[0] = answer;
        count = 2
      }
        console.log(opp.rator)
        console.log(answer)
        display.textContent = Math.round(answer * 10000) / 10000;
        string = '0'
        click = 0
        console.log(values)
      })
    })



  // op.addEventListener('click', (e) => {

  //   //values & count = method of storing numbers entered into an array
  //   if (display.innerHTML != NaN){
  //     values[count] = parseFloat(display.innerHTML)}
  //   console.log(values[count])

  //   op = e.target
  //   opp.rator = op.innerHTML
  //   console.log(opp.rator)
    
  //  console.log(values);
  //  count += 1;
  //   if(count > 1){
  //     let answer =  values.reduce((total, currentItem) => {
  //     return operate(opp.rator, currentItem, total)
  //   })
  //   values[0] = answer;
  //   display.textcontent = answer;
  //     count = 1
  //   }

  //   display.textContent = null;
  //   console.log(count)
  

  // })

  
  // equal.addEventListener('click', (e) => {
  //   const answer = operate(opp.rator, values[1], values[0])

  //     console.log(answer)

  // })


 


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
  else if (op === '**'){
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
  else{
    return num1
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