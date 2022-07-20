const display = document.getElementById('display');
const numbers = document.querySelectorAll('[id*=key]');
const operators = document.querySelectorAll('[id*=Operator]');

let newNumber = true;
let operator;
let previousNumber;

const pendingOperation = () => operator != undefined;

const calculate = () => {
    if(pendingOperation()){
        const currentNumber = parseFloat(display.textContent);
        newNumber = true;
        if(operator == '+'){
            updateDisplay(previousNumber + currentNumber);
        }else if(operator == '-'){
            updateDisplay(previousNumber - currentNumber);
        }else if(operator == '*'){
            updateDisplay(previousNumber * currentNumber);
        }else if(operator == '/'){
            updateDisplay(previousNumber / currentNumber);
        }
    }
}

const updateDisplay = (text) => {
    if(newNumber){
        display.textContent = text;
        newNumber = false;
    }else{
        display.textContent += text;
    }    
}

const insertNumber = (e) => updateDisplay(e.target.textContent);

numbers.forEach(number => number.addEventListener('click', insertNumber));

const selectOperator = (e) => {
    if(!newNumber){
        calculate()
        newNumber = true;
        operator = e.target.textContent;
        previousNumber = parseFloat(display.textContent);
        console.log(operator)
    }
}

operators.forEach(operator => operator.addEventListener('click', selectOperator));
