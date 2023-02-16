// const obj = {
//     Bob: 1700,
//     John: 6000,
//     Evelina: 1200
// }


// const sumSalaries = function (salaries) {
//     let sum = 0;
//     for (let employees in salaries) {
//         sum += salaries[employees]
//     }
//     return sum;
// }

// console.log(sumSalaries(obj));


// const name = 'Muhammadrasul';

// const substring = 'K'

// console.log(name.includes(substring));

// const nums = [1, 2, 3, 4, 5, 'A', '5'];

// const checkNum = 6;

// console.log(nums.includes('5'));

// const myArr = [1, 2, 3, 4, 5, 6, 7];
// const myArr2 = [1, 2, 3, 4, 5];

// function checkNum(nums) {
//     if (nums.includes(7)) {
//         return 'CR7'
//     } else {
//         return 'Nothing'
//     }
// }

// const checkNum2 = nums => nums.includes(7) ? 'CR7' : 'Nothing';

// console.log(checkNum2(myArr));
// console.log(checkNum2(myArr2));

// const colors = ['green', 'yellow', 'Blue', 'Orange', 'Purple', 'Red'];

// const selectedColors = colors.slice(2, 5);
// console.log(selectedColors);

// const myString = 'Hello World I am very happy because I am Js developer';
// const selectedText = myString.slice(0, 11);
// console.log(selectedText);


// const colors = ['green', 'yellow', 'Blue', 'Orange', 'Purple', 'Red'];

// // console.log(colors.splice(1, 4));

// const newSearchColor = colors.indexOf('dewdew');
// const newSearchColor2 = colors.indexOf('2');
// console.log(newSearchColor);
// console.log(newSearchColor2);



// const checkNumbers = function (arr, target) {
//     const checkNum = arr.indexOf(target);
//     return checkNum
// }

// console.log(checkNumbers([1, 2, 3, 4, 5, 6, 7], 7));
// console.log(checkNumbers([4, 5, 6, 7], 8));




// const isEven = (num) => num % 2 === 0;


// console.log(numbers.every(isEven));

// function multiplyNum(num) {
//     return num * 2
// }

// for (let i = 0; i < numbers.length; i++) {
//     console.log(multiplyNum(numbers[i]));
// }

const numbers = [1, 2, 3, 4]

const calcNum = numbers.forEach((num, index, array) => {
    return num * 2;
})
console.log(calcNum);

// const numbers = [3, 5, 7, 8, 9];

// console.log(Math.max(...numbers));

// const numbers = [-3, -2, 0, 2, 8];
// const otherNumbers = [8, 10, 20];

// const findMissingNumbers = function (arr) {
//     let min = Math.min(...arr);
//     let max = Math.max(...arr);
//     const newNumber = [];

//     for (let i = min; i <= max; i++) {
//         if (!arr.includes(i)) {
//             newNumber.push(i);
//         }
//     }
//     return newNumber
// }

// console.log(findMissingNumbers(numbers));
// console.log(findMissingNumbers(otherNumbers));


