// declearing variable
const inputs = document.querySelectorAll('#pad button');
const inputView = document.querySelector('#inputView');
const next = document.querySelector('#next');
const display = document.querySelector('#display');
const preview = document.querySelector('#preview');
let chosenOp = '';
const ops = document.querySelectorAll('#ops_pad button');
let numbers = []

// adding eventlisteners
inputs.forEach(btn => {
    btn.addEventListener('click', write);
});

ops.forEach(op => {
    op.addEventListener('click', chooseOp);
});

next.addEventListener('click', addNumTolist);





// functions
function write(e) {
    if (e.target.innerHTML != '=') {
        inputView.value +=  e.target.innerHTML;
        
    }
    else{
        calculate();
    }
    
}


function chooseOp(e) {
   
    ops.forEach(op => {
        op.style.backgroundColor = "orange"
    });


    if (e.target.innerHTML != 'CE') {
        chosenOp = e.target.innerHTML;
        e.target.style.backgroundColor = 'gray'

        clearAll()
        display.innerHTML = `${e.target.innerHTML} selected`;

    }
    else{
        clearAll()
    }
}


function clearAll() {
    inputView.value = '';
    numbers = []
    preview.innerHTML = 'preview';
    display.innerHTML = 'Choose an op'

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
    
        preview.innerHTML = '';
        numbers.forEach(num => {
    
            preview.innerHTML += num + " | "
        });
    
    }

   
}

function calculate() {
    if (chosenOp == '+') {
        display.innerHTML = add(numbers)
    } else if (chooseOp == '*'){
        display.innerHTML = multiply(numbers)
    }else if (chosenOp == '-') {
        display.innerHTML = subtract(numbers[0], numbers[1])
    }else if (chosenOp == '/') {
        display.innerHTML = divide(numbers[0], numbers[1])
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