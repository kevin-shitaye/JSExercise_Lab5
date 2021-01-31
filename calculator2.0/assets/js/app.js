// declearing variable
const inputs = document.querySelectorAll('#pad button');
const inputView = document.querySelector('#inputView');
const next = document.querySelector('#next');
const display = document.querySelector('#display');
const preview = document.querySelector('#preview');
let chosenOp = '';
const ops = document.querySelectorAll('#ops_pad button');
const additional_func = document.querySelectorAll('#additional_func button')
let numbers = []

// adding eventlisteners
inputs.forEach(btn => {
    btn.addEventListener('click', write);
});

ops.forEach(op => {
    op.addEventListener('click', chooseOp);
});
additional_func.forEach(op => {
    op.addEventListener('click', chooseOp);
});

next.addEventListener('click', addNumTolist);





// functions
function write(e) {
    if (!['=', '^2', '|x|', 'root'].includes(e.target.innerHTML)) {
        inputView.value +=  e.target.innerHTML;
        
    }
    else if (e.target.innerHTML != '=') {
        chosenOp = inputView.value;
    }
    else{
        calculate();
    }
    
}


function chooseOp(e) {
   
    ops.forEach(op => {
        op.style.backgroundColor = "orange"
    });
    additional_func.forEach(op => {
        op.style.backgroundColor = "orange"
    });

    if (e.target.innerHTML != 'CE') {
        clearAll()
        chosenOp = e.target.innerHTML;
        e.target.style.backgroundColor = 'gray'

        
        display.innerHTML = `${e.target.innerHTML} selected`;

    }
    else{
        clearAll()
    }
}


function clearAll() {
    inputView.value = '';
    numbers = [];
    chosenOp = '';
    preview.innerHTML = 'preview';
    display.innerHTML = 'Choose an op';

}

function addNumTolist() {
    if (chosenOp != "") {
        if (chosenOp == '+' | chosenOp == '*') {
            numbers.push(inputView.value);
            inputView.value = '';
            
        }
        else{
            if (numbers.length < 1) {
                numbers.push(inputView.value);
                inputView.value = '';
            }
            else{
                numbers.push(inputView.value);
                inputView.value = '';
                calculate()
            }
        }
    if (numbers.length != 0) {
        preview.innerHTML = '';
        numbers.forEach(num => {
    
            preview.innerHTML += num + " | "
        });
    }
        
    
    }

   
}

function calculate() {
    let num1 = numbers[0]
    let num2 = numbers[1]
    if (chosenOp == '+') {
        display.innerHTML = add(numbers)
    } else if (chosenOp == '*'){
        display.innerHTML = multiply(numbers)
    }else if (chosenOp == '-') {
        clearAll()
        display.innerHTML = subtract(num1,num2)
    }else if (chosenOp == '/') {
        clearAll()
        display.innerHTML = divide(num1, num2)
    }
    else if (chosenOp == '^2') {
        clearAll()
        display.innerHTML = square(num1)
    }else if (chosenOp == '|x|') {
        clearAll()
        display.innerHTML = absolute(num1)
    }else if (chosenOp == 'root') {
        clearAll()
        display.innerHTML = Math.sqrt(num1)
    }
    else{
        display.innerHTML = 'Choose an op'
    }
}




// calculation functions
function subtract(x, y) {
    return Number(x) - Number(y);
}

function divide(x, y) {
    if (y != 0) {
       return Number(x) / Number(y);   
    } else {
        return 'Division by zero';
    }
    
}

function add(arr) {
    let sum = 0;
    arr.forEach(number => {
        sum = sum + Number(number);
    });
    return sum;
    
}

function multiply(arr) {
    let product = 1;
    arr.forEach(number => {
        product = product * Number(number);
    });
    return product;
    
}

function square(x) {
    return Number(x) * Number(x)
}



function absolute(x) {
    if (x < 0 ) {
        return Number(x) * -1
    }
    return x 
}
