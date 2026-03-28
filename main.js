import {convDec, toDec} from './conv.js'

let number = 0

let numberInput = document.getElementById('number');
let binaryInput = document.getElementById('binary');
let inputs = [numberInput, binaryInput]
let toConv = [10, 2]

const reflect = (n = 0, ex) => inputs.forEach((el, i) => {
    if (i != ex) el.value = convDec(n, toConv[i]);
});

window.onload = (event) => {
    reflect(0)
};

numberInput.addEventListener('input', (event) => {
    let value = event.target.valueAsNumber
    if (!isNaN(value)) {
        number = value
        reflect(number, 0)
    }
});

binaryInput.addEventListener('input', (event) => {
    let value = event.target.value
    number = toDec(value, 2)
    reflect(number, 1)
});