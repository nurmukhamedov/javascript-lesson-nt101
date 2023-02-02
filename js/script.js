'use strict';

// console.log(isNaN(12));
// console.log(isNaN(0 / 1));
// console.log(isNaN(12.3));
// console.log(isNaN("Geeks"));
// console.log(isNaN("13/12/2020"));
// console.log(isNaN(-46));
// console.log(isNaN(NaN));
// const myVal = document.querySelector('.euro');
// console.log(myVal.value);

// const re1 = /d/;
// const name = 'abdc';
// const re2 = new RegExp("abc");
// console.log(re2.test(name));

// let text = "       Hello World!            ";
// let result = text.toLowerCase();
// console.log(text.length);
// console.log(result);
// console.log(re1.test('oldewdwed32d23d'));



const money = document.querySelector('.enteredMoney'),
    selectedCurrency = document.querySelector('.selectedCurrency'),
    dollar = document.querySelector('.dollar'),
    euro = document.querySelector('.euro'),
    btn = document.querySelector('.btn'),
    box = document.querySelector('.box');

btn.addEventListener('click', function () {
    if (selectedCurrency.value === dollar.value) {
        return box.innerText = (money.value / 11500).toFixed(2);
    } else if (selectedCurrency.value === euro.value) {
        return box.innerText = (money.value / 12500).toFixed(2);
    } else {
        return box.innerText = 'Xato'
    }
})

