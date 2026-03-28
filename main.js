import {convDec, toDec} from './conv.js';

let number = 0;

let numberInput = document.getElementById('number');
let inputs = [];
let toConv = [];

const regBas = (b, id, name) => {
    let table = document.getElementById('bases');
    table.insertAdjacentHTML('beforeend', `<tr><th><label for="${id}">${name}: </label></th><td><input type="text" id="${id}" name="${id}" autocomplete="off"></td></tr>`);
    let base = document.getElementById(id);
    inputs.push(base);
    toConv.push(b);
    base.addEventListener('input', (event) => {
        const el = event.target;
        const i = inputs.indexOf(el);
        let value = event.target.value;
        number = toDec(value, toConv[i]);
        reflect(number, i);
    });
};

const reflect = (n = 0, ex) => {
    inputs.forEach((el, i) => {
        if (i != ex) el.value = convDec(n, toConv[i]);
    })
    if (ex != 'number') numberInput.value = convDec(n, 10);
};

window.onload = (event) => {
    regBas([3, {de: 2}], 'unseminary', 'Unseminary');
    regBas(2, 'binary', 'Binary');
    regBas(3, 'ternary', 'Ternary');
    regBas(4, 'quaternary', 'Quaternary');
    regBas(6, 'heximal', 'Heximal');
    regBas(12, 'dozenal', 'Dozenal');
    regBas(20, 'vigesimal', 'Vigesimal');
    reflect(0);
};

numberInput.addEventListener('input', (event) => {
    let value = event.target.value;
    if (value.length > 0 && !isNaN(parseFloat(value))) {
        number = value;
        reflect(number, 'number');
    }
});