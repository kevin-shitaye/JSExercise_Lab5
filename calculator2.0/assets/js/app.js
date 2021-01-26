let numberInput = document.querySelector('#number')

let display = document.querySelector('#answer')

let operator = document.getElementsByName('operator')
let size = document.querySelector('#size')
size.style.display = 'none';


if (operator == '+' | operator == '*') {
    size.style.display = 'block';
} else {
    size.style.display = 'none'
}