const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const newNumber = [];
const newReversedNumber = []



// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     newNumber.push(calcNum(element));
// }

// for (let i = numbers.length - 1; i >= 0; i--) {
//     const element = numbers[i];
//     newReversedNumber.push(calcNum(element));
// }
// for loop
// for (let index = 0; index < numbers.length; index++) {
//     console.log(numbers[index]);
// }
// for of loop

// const box = document.querySelector('.box');

// const calcNum = function (number) {
//     return number * 2;
// }

// for (const number of numbers) {
//     const newNumber = calcNum(number);
//     box.innerHTML += `<h3>${newNumber}</h3>`
// }

// for (const number of numbers) {
//     const newNumber = calcNum(number);
//     const newElement = document.createElement('p');
//     newElement.innerText = newNumber;
//     box.appendChild(newElement);
// }



// const word = ['Hello', 'World', 'Jonh', 'How', 'are', 'you', 1, 5, true];

// const sentence = word.join(' ');

// const myName = 'Muhammadrasul Nurmukhamedov';
// const myArray = myName.split(' ');


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8];
// const replacedNum = myNums.reverse();
// console.log(replacedNum);


const userName = prompt('Ismingizni kiriting');

const replacedName = function (name) {
    const nameToArray = name.split(' ');
    return nameToArray.reverse().join(' ');
}
console.log(replacedName(userName));


