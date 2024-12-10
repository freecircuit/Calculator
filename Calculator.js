// Calculator variables
const values = [];
const op = document.querySelectorAll('.op');
const num = document.querySelectorAll('.num');
const display = document.querySelector("#InnerDisplay");
const equal = document.querySelector('#equal')
const clear = document.querySelector('#clear')
let count = 1;
let opp = {rator: null}
let temp = {temp: null}
let answer = 0;
let string = '';
let click = 0;

//Retrieve values for variables
document.querySelectorAll(".num").forEach(item => {
  item.addEventListener('click', (e) => {
    //Clear display
    if (click == 0){
      display.textContent = null
    }
    click += 1;
    if(count > 2){
      string = '0'
      opp = {rator: null}
      temp = {temp: null}
      answer = 0;
      count = 1
    }
    //Add string of numbers to display
    if (click > 0){
    display.textContent += e.target.innerHTML;}

    //populate variable to be added to values array
    string += e.target.innerHTML


  }
  )
  
});

  //Assign operator to a variable and use the click event as to begin next number    
  document.querySelectorAll('.op').forEach(item => {
      item.addEventListener('click', (e) => {

        //Capture operator variable from last time through for calculation
        temp.temp = opp.rator
        console.log(temp.temp)

        //Populate values array with number from calc
        values[count] = parseFloat(string.valueOf())

        //Create variable from operator
        opp.rator = e.target.innerHTML

        //Reorganize array inorder to calculate on correct numbers
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

        //Round to four decimal places and reset temp values
        display.textContent = Math.round(answer * 10000) / 10000;
        string = '0'
        click = 0
        console.log(values)
      })
    })

   
 //Code equals button
    equal.addEventListener('click', (e) => {
      if(count < 2){
        values[0] = parseFloat(string.valueOf())
        display.textContent = values[0]
        }
      else{
        values[count] = parseFloat(string.valueOf())
        answer = operate(opp.rator, values[0], values[2])
        display.textContent = Math.round(answer * 10000) / 10000;
        values[0] = answer
        count += 1
        opp = {rator: null}
        temp = {temp: null}
        answer = 0;
      }
        string = '0'
        click = 0
        
    })
    //Add functionality to the clear button
    clear.addEventListener('click', (e) => {
      count = 1;
      opp = {rator: null}
      temp = {temp: null}
      answer = 0;
      string = '';
      click = 0;
      display.textContent = null
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