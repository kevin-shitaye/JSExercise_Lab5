// declearing variable
const inputs = document.querySelectorAll('#pad button');
const inputView = document.querySelector('#inputView');
const next = document.querySelector('#next');
const display = document.querySelector('#display')
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
        display.innerHTML += e.target.innerHTML
    }
    else{
        calculate();
    }
    
}


function chooseOp(e) {
    if (e.target.innerHTML != 'CE') {
        chosenOp = e.target.innerHTML;
    }
    else{
        clearAll()
    }
}


function clearAll() {
    numbers = []

}

function addNumTolist() {
    if (chosenOp == '+' | chosenOp == '*') {
        numbers.push(inputView.value);
        inputView.value = '';
    }
    else{
        if (numbers.length < 2) {
            numbers.push(inputView.value);
            inputView.value = '';
        }
        else{
            inputView.disabled = 'disabled';
        }
    }
   
}

function calculate() {
    // calculate
}